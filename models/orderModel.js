const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  cheeseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Cheese'
  },
  quantity: {
    type: Number,
    required: true,
    min: 1  // Ensures at least one item is ordered
  }
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  items: [orderItemSchema],  // Array of items
  name: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  priceTotal: {
    type: Number,
    required: true
  },
  deliveryStatus: {
    type: String,
    required: true,
    default: 'Pending'  // Default value for delivery status
  }
});

module.exports = mongoose.model('Order', orderSchema);
