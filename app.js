require("dotenv").config();
const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


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

app.use(bodyParser.json());
app.use(morgan('dev'));

//Routes

const router = require('./routes/index');
app.use('/', router);

const event = require('./routes/event');
app.use('/events', event);

const speaker = require('./routes/speaker');
app.use('/speakers', speaker);

const stage = require('./routes/stage');
app.use('/stage', stage);

const user = require('./routes/user');
app.use('/user', user);

//Server
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})