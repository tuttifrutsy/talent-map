const Stage = require("../models/Stage");

module.exports.getAllStages = (req, res) => {
  Stage.find()
    .populate('event')
    .then(allStages =>
      res.status(201).json({
        success: true,
        stages: allStages,
        msg: "Todos los Escenarios"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, Prueba Otra vez"
      })
    );
};

module.exports.getStage = (req, res) => {
  Stage.findById(req.params.stageId)
    .then(stage =>
      res.status(200).json({
        success: true,
        stage: stage
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrió un error, Intenta otra vez"
      })
    );
};

module.exports.newStage = (req, res) => {
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
  Stage.findOne({ name })
    .then(stage => {
      if (stage !== null) {
        return res.json({ msg: "Stage ya registrado" });
      }
      let newStage = new Stage({
        name,
        location,
        imageStage,
        events,
        land,
        type
      });

      newStage
        .save()
        .then(stage =>
          res.status(200).json({
            success: true,
            msg: "Se ha registrado un nuevo Stage",
            stage: stage
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
        msg: "Ocurrio un error intenta de nuevo"
      })
    );
};

module.exports.updateStage = (req, res) => {
  const id = req.params.stageId;

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

  Stage.updateOne(
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
    .then(stage => {
      res.status(200).json({
        success: true,
        msg: "Stage actualizado",
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

module.exports.deleteStage = (req, res) => {
  const id = req.params.stageId;
  Stage.findOneAndDelete(id)
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
