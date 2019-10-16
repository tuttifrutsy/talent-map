const express = require("express");
const router = express.Router();
const eventController = require("./eventController");

router.get("/", eventController.getAllEvents);

router.get("/:eventId", eventController.getSingleEvent);

router.post("/", eventController.newEvent);

router.put("/:eventId", eventController.updateEvent);

router.delete("/:eventId", eventController.deleteEvent);

module.exports = router;
