const express = require("express");
const router = express.Router();
const sectionController = require("../controllers/sectionController");

router.get("/", sectionController.getAllsections);

router.get("/:sectionId", sectionController.getsection);

router.post("/", sectionController.newsection);

router.put("/:sectionId", sectionController.updatesection);

router.delete("/:sectionId", sectionController.deletesection);

module.exports = router;
