const Cheese = require('../models/cheeseModel');

// Function to create a new cheese entry
exports.createCheese = async (req, res) => {
  try {
    const newCheese = await Cheese.create(req.body);
    res.status(201).send(newCheese);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Function to get all cheese entries
exports.getAllCheese = async (req, res) => {
  try {
    const cheeses = await Cheese.find();
    res.status(200).send(cheeses);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Function to remove a cheese entry by its ID
exports.removeCheese = async (req, res) => {
  try {
    const deletedCheese = await Cheese.findByIdAndDelete(req.params.id);
    if (!deletedCheese) {
      return res.status(404).send({ message: 'Cheese not found!' });
    }
    res.status(200).send({ message: 'Cheese successfully deleted!' });
  } catch (error) {
    res.status(500).send(error);
  }
};
