const express = require('express');
const router = express.Router();
const cheeseController = require('../controllers/cheeseController');

// Route to create a new cheese
router.post('/add', cheeseController.createCheese);

// Route to get all cheeses
router.get('/all', cheeseController.getAllCheese);

// Route to delete a cheese by ID
router.delete('/del/:id', cheeseController.removeCheese);

module.exports = router;
