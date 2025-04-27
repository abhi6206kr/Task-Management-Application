const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => console.log('Server started on port 5000')))
    .catch(err => console.log(err));
