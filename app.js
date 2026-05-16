const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const db = require('./configs/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api', routes);

// Serve frontend (Vite builds to 'frontend/dist')
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Catch-all: send index.html for any non-API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

module.exports = app;