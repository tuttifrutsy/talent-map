const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

module.exports.getAllEvents = (req, res) => {
  Event.find()
    .then(allEvents =>
      res.status(201).json({
        success: true,
        events: allEvents,
        msg: "Todos los Eventos"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, Prueba Otra vez"
      })
    );
};

module.exports.getSingleEvent = (req, res, next) => {
  Event.findById(req.params.eventId)
    .populate('speaker')
    .populate('stage')
    .then(event =>
      res.status(200).json({
        success: true,
        event: event
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrió un error, Intenta otra vez"
      })
    );
};

module.exports.newEvent = (req, res) => {
  const id = req.session.currentUser;
  const {
    title,
    description,
    scheduledFor,
    stageId,
    speakerId,
    type,
    land,
  } = req.body;

  if (
    title === "" ||
    description === "" ||
    scheduledFor === "" ||
    stageId === "" ||
    speakerId === "" ||
    type === "" ||
    land === ""
  ) {
    return res.json({ msg: "Completa los campos para crear un nuevo evento" });
  }

  Event.findOne({ title })
    .then(event => {
      if (event !== null) {
        return res.json({
          msg: "Ya existe un evento con ese nombre, prueba otro"
        });
      }
      let newEvent = new Event({
        title,
        description,
        // scheduledFor,
        // stage: stageId,
        // speaker: speakerId,
        // land,
        // type,
        author: id
      });
      newEvent
        .save()
        .then(event =>
          res.status(200).json({
            success: true,
            msg: "Se ha creado un nuevo evento",
            event: event
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

module.exports.updateEvent = (req, res) => {
  const id = req.params.eventId;

  const {
    title,
    description,
    scheduleFor,
    stageId,
    speakerId,
    land,
    type
  } = req.body;

  if (
    title === "" ||
    description === "" ||
    scheduleFor === "" ||
    stageId === "" ||
    speakerId === "" ||
    type === "" ||
    land === ""
  ) {
    return res.json({
      msg: "Completa los campos que deseas actulizar del evento"
    });
  }

  Event.updateOne(
    { _id: id },
    {
      $set: {
        title: title,
        description: description,
        scheduleFor: scheduleFor,
        stage: stageId,
        speaker: speakerId,
        land,
        type
      }
    }
  )
    .then(event => {
      res.status(200).json({
        success: true,
        msg: "Evento Actualizado",
        event: event
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};

module.exports.deleteEvent = (req, res) => {
  const id = req.params.eventId;
  Event.findByIdAndDelete(id)
    .exec()
    .then(() =>
      res.status(204).json({
        success: true,
        msg: "Se elimino el evento"
      })
    )
    .catch(err =>
      res.status(400).json({
        success: false,
        msg: "Ocurrio un error, intenta otra vez"
      })
    );
};
