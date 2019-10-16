const express     = require("express");
const passport    = require("passport");
const bcrypt      = require("bcryptjs");
const Strategy    = require("passport-facebook").Strategy;
const jwt         = require("jsonwebtoken");
const error_types = require("../controllers/error_types");
const User        = require("./UserModel");

module.exports.newUser = (req, res, next) => {
  const { email, password, username } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Ingresa tu usuario y contraseña" });
  }

  if (password.length < 7) {
    res.status(400).json({
      message: "Por seguridad ingresa un código de más de 8 caracteres."
    });
    return;
  }

  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Revisa tu usuario." });
      return;
    }

    if (foundUser) {
      res
        .status(400)
        .json({ message: "Intenta uno nuevo, este usuario ya existe." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      email: email,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res.status(400).json({ message: "Se han creado un nuevo usuario" });
        return;
      }
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Ahora puedes Iniciar Sesión." });
        }
        res.status(200).json(aNewUser);
      });
    });
  });
};

module.exports.login = (req,res, next) => {
   console.log("caso login");
        passport.authenticate("local", { session: false }, (error, user) => {
            console.log("ejecutando *callback auth* de authenticate para estrategia local");

            //si hubo un error en el callback verify relacionado con la consulta de datos de usuario
            if (error || !user) {
                next(new error_types.Error404("username or password not correct."))
            }else {
                console.log("*** comienza generacion token*****");
                const payload = {
                    sub: user._id,
                    exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
                    username: user.username
                };

                /* NOTA: Si estuviesemos usando sesiones, al usar un callback personalizado, 
                es nuestra responsabilidad crear la sesión.
                Por lo que deberiamos llamar a req.logIn(user, (error)=>{}) aquí*/

                /*solo inficamos el payload ya que el header ya lo crea la lib jsonwebtoken internamente
                para el calculo de la firma y así obtener el token*/
                const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, {algorithm: process.env.JWT_ALGORITHM});
                res.json({ data: { token: token } });
            }

        })(req, res);
}


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
