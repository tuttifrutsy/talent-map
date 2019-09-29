const Section = require('../models/Section');

module.exports.getAllSections = ( req, res) => {
  Section.find()
  .populate('stages')
  .populate('speakers')
  .populate('events')
  .then(allSections => 
    res.status(201).json({
      succes: true,
      sections: allSections,
      msg: "Todas las Secciones"
    }))
    .catch(err =>
      res.status(400).json({
        succes: false,
        msg: "Ocurrio un error, Intenta otra vez"
      }));
};

module.exports.getSection = (req, res) => {
  Section.findById(req.params.sectionId)
  .populate('stages')
  .populate('speakers')
  .populate('events')
  .then(section => 
    res.status(200).json({
    succes: true,
    section: section
    }))
  .catch(err => 
    res.status(400).json({
      succes: false,
      msg: "Ocurrio un error, intenta otra vez"
    }));
};

module.exports.newSection = (req, res) => {
  const {
    title,
    logoUrl,
    type,
    description,
    autorID
  } = req.body; 
  if(title === "" ||
    logoUrl === "" ||
    type === "" ||
    description === "" ||
    autorID === ""){
      return res.json({
        msg: "Completa los campos para ingreaser una nueva Seción"
      });
    }
    Section.findOne({title})
    .then(section => {
      if( section !== null) {
        return res.json({msg:"Sección ya registrada, Intenta otro nombre"})
      }
      let newSection = new Section({
        title,
        logoUrl,
        type,
        description,
        author: autorID
      });
      newSection
      .save()
      .then(section => 
        res.status(200).json({
          succes: true,
          msg: "Se ha creado una nueva sección",
          section: section,
        }))
        .catch(err =>
          res.status(400).json({
            succes: false,
            msg: "Ocurrio un error, intenta otra vez"
          }))
    });
};


module.exports.updateSection = (req, res) => {
  const id = req.params.sectionId;

  const {
    title,
    description,
    logoUrl,
    type,

  } = req.body;

  if (
    title === "" ||
    description === "" ||
    logoUrl === "" ||
    type === ""
  ) {
    return res.json({
      msg: "Completa los campos que deseas actualizar"
    });
  }

  Section.updateOne(
    { _id: id },
    {
      $set: {
        title: title,
        description: description,
        logoUrl: logoUrl,
        type: type,
      }
    }
  )
    .then(section => {
      res.status(200).json({
        success: true,
        msg: "Sección actualizada",
        section: section
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta de nuevo"
      })
    );
};

module.exports.deleteSection = (req, res) => {
  const id = req.params.sectionId;
  Section.findOneAndDelete(id)
    .then(() =>
      res.status(204).json({
        success: true,
        msg: "Se elimino la sección"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};
