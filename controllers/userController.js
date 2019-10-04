const express = require("express");
const router = express.Router();
const User = require('../models/User');

module.exports.getUser = (req, res) => {
  User.findById(req.params.userId)
  .then(user =>
    res.status(200).json({
      success: true,
      user: user
    })
    )
  .catch(err =>
    res.status(400).json({
      success: false,
      msg: 'Ocurrio un error, intenta otra vez'
    })); 
};

module.exports.newUser = (req, res) => {
  const { firstname, lastname, avatar, email, password, username} = req.body;

  if( email === "" || password === ""){
    return res.json({
      msg: "Completa los campos para registrar un nuevo usario"
    });
  }
 User.findOne({ email})
 .then( user => {
   if(user !== null) {
     return res.json({msg: "Email ya registrado intenta otro"});
   }
   let newUser = new User({
     firstname,
     lastname,
     username,
     password,
     avatar
   });
   newUser.save()
   .then(user =>
    res.status(200).json({
      success:true,
      msg: 'Se ha creado un nuevo usuario',
      user: user
    }))
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      }));
 })
 .catch(error => 
  res.status(400).json({
    success: false,
    msg: "Ocurrio un error intenta otra vez"
  }))
};


module.exports.updateUser = (req, res) => {
  const id = req.params.userId;

  const { firstname, lastname, username, email, avatar } = req.body;

  if (
    firstname === "" ||
    lastname === "" ||
    username === "" ||
    email === "" ||
    avatar === "" 
  ) {
    return res.json({
      msg: "Completa los campos que deseas actualizar"
    });
  }

  User.updateOne(
    { _id: id },
    {
      $set: {
        name: {
          firstname: firstname,
          lastname: lastname
        },
        username: username,
        email: email,
        avatar: avatar
      }
    }
  )
    .then(stage => {
      res.status(200).json({
        success: true,
        msg: "Usuario actualizado",
        stage: stage
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta de nuevo"
      })
    );
};

module.exports.deleteUser = (req, res) => {
  const id = req.params.userId;
  User.findOneAndDelete(id)
    .then(() =>
      res.status(204).json({
        success: true,
        msg: "Se elimino Usuario"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};
