
const express = require("express");
const authRoutes = express.Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');
const passport = require("passport");


authRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).json({ message: "Ingresa tu usuario y contraseña" });
    return;
  }

  if (password.length < 7) {
    res
      .status(400)
      .json({
        message:
          "Por seguridad ingresa un código de más de 8 caracteres."
      });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Revisa tu usuario." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Intenta uno nuevo, este usuario ya existe." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "." });
        return;
      }

      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Ahora puedes Iniciar Sesión." });
          return;
        }
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post('/login', (req, res, next) =>{
  passport.authenticate('local', {session:false}, (err, user, info)=> {
    if(err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user
      });
    }
    req.login(user, {session: false}, (err) => {
      if ( err) {
        res.send(err);
      }

      const token = jwt.sign(user, `${process.env.JWT}`);
      return res.json({user, token});
    });
  })(req, res);
});

authRoutes.post("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
    
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
  console.log(req.params.id);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});





module.exports = authRoutes;
