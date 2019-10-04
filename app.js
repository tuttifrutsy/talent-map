require("dotenv").config();
const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const passport = require('passport');
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./models/User');
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

//MIDELWARE 

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(
  session({
    secret: "aca el secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(
  session({
    secret: "talent-map-secret",
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true
    },
    (req, username, password, next) => {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return next(null, false, { message: "Incorrect Username" });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return next(null, false, { message: "Incorrect Password" });
        }
        return next(null, user);
      });
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());
//Routes

const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

const router = require('./routes/index');
app.use('/api', router);

const event = require('./routes/event');
app.use('/api/events', event);

const speaker = require('./routes/speaker');
app.use('/api/speakers', speaker);

const stage = require('./routes/stage');
app.use('/api/stage', stage);

const user = require('./routes/user');
app.use('/api/user', user);

const section = require('./routes/section');
app.use('/api/lands', section);

//Server
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})