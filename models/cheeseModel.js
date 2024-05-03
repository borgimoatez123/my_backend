const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  store: { type: String, required: true }
});

module.exports = mongoose.model('Cheese', cheeseSchema);
