require('dotenv').config();
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');

const User = require('../models/user.model');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
 
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    // console.log(accessToken, refreshToken,profile);
    // console.log(profile._json.email);
    // const password = uuidv4();
    // const role = 'user';
    // console.log(password);

    let user = await User.findOne({email : profile?._json?.email});

    //if there is not such user create one
    if(!user)
    {
        user = await User.create({
            email : profile._json.email,
            password : uuidv4(),
            role : ['user']
        })
    }
    console.log(user);
    return cb(null, user);
  }
));

module.exports = passport;