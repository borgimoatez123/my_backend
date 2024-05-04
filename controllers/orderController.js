const Order = require('../models/orderModel');

// Function to create a new order
exports.createOrder = async (req, res) => {
    try {
      const newOrder = new Order({
        userId: req.body.userId,
        items: req.body.items,  // Expecting an array of items
        phone: req.body.phone,
        address: req.body.address,
        priceTotal: req.body.priceTotal
      });
  
      await newOrder.save();
      res.status(201).send(newOrder);
    } catch (error) {
      res.status(500).send(error);
    }
  };

// Function to get all orders
exports.getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find()
        .populate('userId')
        .populate({
          path: 'items.cheeseId',  // Adjusted to target the nested field
          model: 'Cheese'
        });
  
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send(error);
    }
  };
// Function to remove an order by its ID
exports.removeOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send({ message: 'Order not found!' });
    }
    res.status(200).send({ message: 'Order successfully deleted!' });
  } catch (error) {
    res.status(500).send(error);
  }
};/*const Order = require('../models/orderModel');

// Function to create a new order
exports.createOrder = async (req, res) => {
    try {
      const newOrder = new Order({
        userId: req.body.userId,
        items: req.body.items,  // Expecting an array of items
        phone: req.body.phone,
        name: req.body.name,
        address: req.body.address,
        priceTotal: req.body.priceTotal
      });
  
      await newOrder.save();
      res.status(201).send(newOrder);
    } catch (error) {
      res.status(500).send(error);
    }
  };

// Function to get all orders
exports.getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find()
        .populate('userId')
        .populate({
          path: 'items.cheeseId',  // Adjusted to target the nested field
          model: 'Cheese'
        });
  
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send(error);
    }
  };
// Function to remove an order by its ID
exports.removeOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send({ message: 'Order not found!' });
    }
    res.status(200).send({ message: 'Order successfully deleted!' });
  } catch (error) {
    res.status(500).send(error);
  }
};
*/
