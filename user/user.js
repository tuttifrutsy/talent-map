const express = require('express');
const router = express.Router();
const userController = require('./userController');
const customMdw      = require('../middleware/custom');

router.post('/signup', userController.newUser);
router.post('/login', userController.login);
router.get('/profile', customMdw.ensureAuthenticated, userController.getUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;

