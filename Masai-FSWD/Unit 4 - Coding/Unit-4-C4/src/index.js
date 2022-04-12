const express = require('express');
const app = express();
app.use(express.json());

const {registerUser,loginUser} = require('./controllers/auth.controller');
const todoController = require('./controllers/todo.controller');

//Register and Login User
app.post('/register', registerUser);
app.post('/login', loginUser);

//todos controller
app.use('/todos',todoController);

module.exports = app;