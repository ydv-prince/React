const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('---------------------------------------------');
        console.log('✅ MongoDB Connected successfully to Atlas');
        console.log('---------------------------------------------');
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:');
        console.error(err.message);
        console.log('Please ensure your MONGO_URI in .env is correct and includes your password.');
        process.exit(1); // Exit process with failure
    });

// Route Mounting
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// Basic health check route
app.get('/', (req, res) => {
    res.send('Blogging API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
