const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from client directory
app.use(express.static(path.join(__dirname, '../../client')));

// Sample API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express Backend!' });
});

// Hello function for unit testing logic
app.locals.sayHello = (name) => {
    console.log(`sayHello called with name: ${name}`);
    return `Hello, ${name}!`;
};

module.exports = app;
