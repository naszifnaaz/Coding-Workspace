const express = require('express');
const app = express();
app.use(express.json());

const submissionController = require('./controllers/submission.controller');
app.use('/submissions',submissionController);

module.exports = app;