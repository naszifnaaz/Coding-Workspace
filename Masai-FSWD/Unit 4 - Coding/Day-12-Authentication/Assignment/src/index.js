const express = require('express');
const app = express();
const {registerUser,loginUser} = require('./controllers/auth.controller');

const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller')

app.use(express.json());

app.post('/register',registerUser);
app.post('/login',loginUser);

app.use('/users',userController);
app.use('/posts',postController);

module.exports = app;