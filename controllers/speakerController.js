
const Speaker = require("../models/Speaker");

module.exports.getAllSpeakers = (req, res) => {
  Speaker.find()
    .then(allSpeakers =>
      res.status(201).json({
        success: true,
        events: allSpeakers,
        msg: "Todos los Speakers"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, Prueba Otra vez"
      })
    );
};

module.exports.getSpeaker = (req, res) => {
  Speaker.findById(req.params.speakerId)
    .then(speaker =>
      res.status(200).json({
        success: true,
        speaker: speaker
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrió un error, Intenta otra vez"
      })
    );
};

module.exports.newSpeaker = (req, res) => {
  const {
    firstname,
    lastname,
    resume,
    avatar,
    occupation,
    land,
    email
  } = req.body;

  if (
    firstname === "" ||
    lastname === "" ||
    occupation === "" ||
    resume === "" ||
    email === ""
  ) {
    return res.json({
      msg: "Completa los campos para ingresar un nuevo Speaker"
    });
  }
  Speaker.findOne({ email })
    .then(speaker => {
      if (speaker !== null) {
        return res.json({ msg: "Speaker ya registrado" });
      }
      let newSpeaker = new Speaker({
        name: {
          firstname: firstname,
          lastname: lastname
        },
        occupation,
        resume,
        avatar,
        land,
        email
      });

      newSpeaker
        .save()
        .then(speaker =>
          res.status(200).json({
            success: true,
            msg: "Se ha registrado un nuevo Speaker",
            speaker: speaker
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

module.exports.updateSpeaker = (req, res) => {
  const id = req.params.speakerId;

  const {
    firstname,
    lastname,
    resume,
    avatar,
    occupation,
    land,
    email
  } = req.body;

  if (
    firstname === "" ||
    lastname === "" ||
    occupation === "" ||
    resume === "" ||
    email === ""
  ) {
    return res.json({
      msg: "Completa los campos que deseas actualizar"
    });
  }

  Speaker.updateOne(
    { _id: id },
    {
      $set: {
        name: { firstname: firstname, lastname: lastname },
        resume: resume,
        email: email,
        avatar: avatar,
        occupation: occupation,
        land: land
      }
    }
  )
    .then(speaker => {
      res.status(200).json({
        success: true,
        msg: "Speaker actualizado",
        speaker: speaker
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta de nuevo"
      })
    );
};

module.exports.deleteSpeker = (req, res) => {
  const id = req.params.speakerId;
  Speaker.findOneAndDelete(id)
    .then(() =>
      res.status(204).json({
        success: true,
        msg: "Se elimino el Speaker"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};
