require("dotenv").config();
const express       = require("express");
const morgan        = require("morgan");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const cors          = require("cors");
const bcrypt        = require("bcrypt");
const passport      = require("passport");
const JwtStrategy   = require('passport-jwt').Strategy;
const LocalStrategy = require("passport-local").Strategy;
const ExtractJwt    = require('passport-jwt').ExtractJwt;


const customMdw     = require('./middleware/custom');

//ROUTES
const router = require("./routes/index");
const event = require('./event/event');
const speaker = require('./speaker/speaker');
const stage = require('./stage/stage');
const user = require('./user/user');
const section = require('./sections/section');
const User = require("./user/UserModel");

const app = express();

//DB

mongoose.Promise = Promise;
mongoose
  .connect(
    `mongodb+srv://Admin:${process.env.PASS}@cluster0-b3btc.mongodb.net/talent-imap?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(db => {
    console.log(
      `Connected to Mongo! Database name: "${db.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
});



passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    (email, password, done) => {
      // console.log("ejecutando *callback verify* de estategia local");
      User.findOne({ email: email })
        .then(data => {
          if (data === null) return done(null, false);
          //el usuario no existe
          else if (!bcrypt.compareSync(password, data.password)) {
            return done(null, false);
          } //no coincide  password
          return done(null, data); //login ok
        })
        .catch(err => done(err, null)); // error en DB
    }
  )
);

/** config de estrategia jwt de passport ******/
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    //console.log("ejecutando *callback verify* de estategia jwt");
    User.findOne({ _id: jwt_payload.sub })
      .then(user => {
        if (user === null) {
          //no existe el usuario
          //podríamos registrar el usuario
          return done(null, false);
        } else return done(null, user);
        /*encontramos el usuario así que procedemos a devolverlo para
        inyectarlo en req.user de la petición en curso*/
      })
      .catch(err => done(err, null)); //si hay un error lo devolvemos
  })
);

//MIDELWARE 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());


// app.use('/api', authRoutes);
app.use('/api/events', event);
app.use('/api/lands', section);
app.use('/api/speakers', speaker);
app.use('/api/stage', stage);
app.use('/api/user', user);
app.use('/api', router);

app.use(customMdw.errorHandler);
app.use(customMdw.notFoundHandler);

//Server
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})