require("dotenv").config();
const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const session = require('express-session');

const router = require("./routes/index");
const event = require('./routes/event');
const section = require('./routes/section');
const speaker = require('./routes/speaker');
const stage = require('./routes/stage');
const user = require('./routes/user');
const authRoutes = require("./routes/authRoutes");

const passport = require('passport');
require('./passport/passport');

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
app.use(cookieParser())
app.use(
  session({
    secret: "aca el secret",
    resave: true,
    saveUninitialized: true
  })
);


app.use(passport.initialize());
app.use(passport.session());
//Routes


app.use('/api', router);
app.use('/api/events', event);
app.use('/api/lands', section);
app.use('/api/speakers', speaker);
app.use('/api/stage', stage);
app.use('/api/user', passport.authenticate('jwt', {session:false}), user);
app.use('/api', authRoutes);

//Server
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})