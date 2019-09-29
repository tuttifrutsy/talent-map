const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');

router.get('/', sectionController.getAllSections);

router.get('/:sectionId', sectionController.getSection);

module.exports = router;

