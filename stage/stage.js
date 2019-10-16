const express = require('express');
const router = express.Router();
const stageController = require('./stageController');

router.get('/', stageController.getAllStages);

router.get('/:stageId', stageController.getStage);

router.post('/', stageController.newStage);

router.put('/:stageId', stageController.updateStage);

router.delete('/:stageId', stageController.deleteStage);

module.exports = router;