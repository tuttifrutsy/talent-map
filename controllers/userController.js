const User = require("../models/User");

module.exports.getUser = (req, res) => {
  User.find({ mail })
    .then(user =>
      res.status(201).json({
        success: true,
        user: user,
        msg: "Información de Usuario"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, Prueba Otra vez"
      })
    );
};

module.exports.newUser = (req, res) => {
  const { name, location, imageStage, events, land, type } = req.body;

  if (
    name === "" ||
    location === "" ||
    imageStage === "" ||
    events === "" ||
    land === "" ||
    type === ""
  ) {
    return res.json({
      msg: "Completa los campos para ingresar un nuevo Stage"
    });
  }
  User.findOne({ email })
    .then(stage => {
      if (stage !== null) {
        return res.json({ msg: "Stage ya registrado" });
      }
      let newUser = new User({
        name,
        location,
        imageStage,
        events,
        land,
        type
      });

      newUser
        .save()
        .then(user =>
          res.status(200).json({
            success: true,
            msg: "Se ha registrado un nuevo Usuario",
            user: user
          })
        )
        .catch(err =>
          res.status(400).json({
            success: false,
            msg: "Ocurrio un error intenta otra vez"
          })
        );
    })
    .catch(error =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un erro intenta de nuevo"
      })
    );
};

module.exports.updateUser = (req, res) => {
  const id = req.params.userId;

  const { name, location, imageStage, events, land, type } = req.body;

  if (
    name === "" ||
    location === "" ||
    imageStage === "" ||
    events === "" ||
    land === "" ||
    type === ""
  ) {
    return res.json({
      msg: "Completa los campos que deseas actualizar"
    });
  }

  User.updateOne(
    { _id: id },
    {
      $set: {
        name: name,
        location: location,
        imageStage: imageStage,
        events: events,
        land: land,
        type: type
      }
    }
  )
    .then(user => {
      res.status(200).json({
        success: true,
        msg: "Usuario actualizado",
        usuario: usuario
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
        msg: "Se elimino el Stage"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};
