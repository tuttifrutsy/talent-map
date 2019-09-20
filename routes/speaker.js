const express = require("express");
const router = express.Router();
const speakerController = require("../controllers/speakerController");

router.get("/", speakerController.getAllSpeakers);

router.get("/:speakerId", speakerController.getSpeaker);

router.post("/", speakerController.newSpeaker);

router.put("/:speakerId", speakerController.updateSpeaker);

router.delete("/:speakerId", speakerController.deleteSpeker);

module.exports = router;
