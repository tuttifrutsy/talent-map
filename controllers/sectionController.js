const Section = require("../models/Section");

module.exports.getAllSections = (req, res) => {
  Section.find()
  .then(allSections =>
    res.status(201).json({
      success: true,
      Sections: allSections,
      msg: "Todos las Secciones"
    })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, Prueba Otra vez"
      })
      );
    };
    
    module.exports.getSingleSection = (req, res, next) => {
      Section.findById(req.params.SectionId)
      .populate('stage')
      .populate('speaker')
      .populate('event')
      .then(Section =>
      res.status(200).json({
        success: true,
        Section: Section
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrió un error, Intenta otra vez"
      })
    );
};

module.exports.newSection = (req, res) => {
  const {
    title,
    description,
    logoUrl,
    land
  } = req.body;

  if (
    title === "" ||
    description === "" ||
    logoUrl === "" ||
    land === ""
  ) {
    return res.json({ msg: "Completa los campos para crear un nuevo Sectiono" });
  }

  Section.findOne({ title })
    .then(Section => {
      if (Section !== null) {
        return res.json({
          msg: "Ya existe un Sectiono con ese nombre, prueba otro"
        });
      }
      let newSection = new Section({
        title,
        description,
        logoUrl,
        land,
      });
      newSection
        .save()
        .then(Section =>
          res.status(200).json({
            success: true,
            msg: "Se ha creado un nuevo Sectiono",
            Section: Section
          })
        )
        .catch(err =>
          res.status(400).json({
            success: false,
            msg: "Ocurrio un error, intenta otra vez"
          })
        );
    })
    .catch(error =>
      res.status(400).json({
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};

module.exports.updateSection = (req, res) => {
  const id = req.params.SectionId;

  const {
    title,
    description,
    logoUrl,
    stageId,
    speakerId,
    stageId,
    land,
  } = req.body;

  if (
    title === "" ||
    description === "" ||
    logoUrl === "" ||
    stageId === "" ||
    speakerId === "" ||
    stageId === "" ||
    land === ""
  ) {
    return res.json({
      msg: "Completa los campos que deseas actulizar del Sectiono"
    });
  }

  Section.updateOne(
    { _id: id },
    {
      $set: {
        title: title,
        description: description,
        logoUrl: logoUrl,
        stages: stageId,
        speakers: speakerId,
        stages: stageId,
        land,
        type
      }
    }
  )
    .then(Section => {
      res.status(200).json({
        success: true,
        msg: "Sectiono Actualizado",
        Section: Section
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};

module.exports.deleteSection = (req, res) => {
  const id = req.params.SectionId;
  Section.findByIdAndDelete(id)
    .exec()
    .then(() =>
      res.status(204).json({
        success: true,
        msg: "Se elimino el Sectiono"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};
