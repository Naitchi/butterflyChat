const express = require('express');
const app = express();

const index = require('./routes/index');

app.use('/api/', index);

module.exports = app;
