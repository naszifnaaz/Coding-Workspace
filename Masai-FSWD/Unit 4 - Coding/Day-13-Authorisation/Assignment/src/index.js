const express = require('express');
const app = express();
app.use(express.json());

const {register,login} = require('./controllers/auth.controller');
const productController = require('./controllers/product.controller');

const passport = require('./configs/google-oauth');

//Custom Authentication
app.post('/register', register);
app.post('/login',login);

//Google OAuth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' , session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.use('/products', productController);


module.exports = app;