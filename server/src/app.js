const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());         
app.use(cors());                 
app.use(morgan('dev'));          

// Example Route
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

// Global Error Handler Example (Optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
