const express = require('express');
const app = express();
const {register,login,generateToken} = require('./controllers/auth.controller');
const postController = require('./controllers/post.controller');
const userController = require('./controllers/user.controller');

const passport = require('./configs/google-oauth');

app.use(express.json());

// Our Custom Authentication
app.post('/register',register);
app.post('/login',login);

app.use('/users', userController);
app.use('/posts',postController);

// Google OAuth Authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  function(req, res) {
    const user = req.user;
    const token = generateToken(user);
    return res.status(200).send({user,token});
  });


module.exports = app;