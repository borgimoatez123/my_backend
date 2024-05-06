const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cheeseRoutes = require('./routes/cheeseRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
// App configuration
const app = express();
const port = 4000;  // Ensure this is the port you want to use
app.use(cors());
// Middlewares
app.use(express.json());

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/cheesedelivery")
.then(() => {
    console.log("Database connected");
    // Start listening only after DB connection is successful
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
})
.catch((err) => {
    console.log("Database connection error:", err);
});

// Routes
app.use('/api/cheese', cheeseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/order', orderRoutes);
app.get("/", (req, res) => {
    res.send("API Working");
});
