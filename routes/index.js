const express = require('express');

// Importing routes for module 
const notesRouter = require('./notes');

const app = express();

// Initialize notes route
app.use('/notes', notesRouter);

module.exports = app; 