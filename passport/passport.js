
require('dotenv').config();
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const bcrypt = require("bcrypt");
const User = require('../models/User');



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


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session:false
}, (email, password, done) => {
  User.findOne({email})
  .then(user => {
    if(!user) 
      return done(null, false, {msg: "Este usuario no existe"});
      else if(!bcrypt.compareSync(password, user.password))
      {return done(null, false, {msg:"No coincide el password"});}
       return done(null, user, {msg: "Logged In Successfully"});
  })
  .catch(err => done(err, null));
}))

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: `${process.env.JWT}`
    },
    function(jwtPayload, cb) {
      return;
      User.findById(jwtPayload.id)
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);