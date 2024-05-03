const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes for registration and login
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
