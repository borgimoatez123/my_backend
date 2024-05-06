const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/add', orderController.createOrder);

// Route to get all orders
router.get('/all', orderController.getAllOrders);

// Route to delete an order by ID
router.delete('/del/:id', orderController.removeOrder);
router.patch('/update/:id/deliver', orderController.updateDeliveryStatus);
module.exports = router;
