const User = require('../models//userModel');
const bcrypt = require('bcryptjs');

// Register a new user
exports.register = async (req, res) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user with hashed password
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      phone: req.body.phone 
    });

    // Save the new user
    await newUser.save();

    // Create a response object excluding the password
    const userResponse = {
      userId: newUser._id,  // MongoDB uses _id as the default ID field
      name: newUser.name,
      email: newUser.email,
      address: newUser.address,
      phone: newUser.phone
    };

    // Send back the user details excluding the password
    res.status(201).send({ message: "User registered successfully!", user: userResponse });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send({ message: "Failed to register user", error: error.message });
  }
};


// Login user
// Login user
exports.login = async (req, res) => {
  try {
    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Compare password with hashed password in database
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // Exclude password and other sensitive details from the response
    const userResponse = {
      userId: user._id, // Typically, you might want to return a token instead
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone
    };

    res.send({ 
      message: "User logged in successfully",
      user: userResponse
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
