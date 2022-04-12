//auth controllers for register and login users

const User = require('../models/user.model');
var jwt = require('jsonwebtoken');
require('dotenv').config();


// Function to generate token
function generateToken(user) {
    var token = jwt.sign({user}, process.env.JWT_SECRET_KEY);
    return token;
}

//Registering user
const register = async (req,res) => {
    try{
        //register if the credentials are valid, i,e valid unique email address
        let user = await User.findOne({email : req.body.email});

        //if a user already exist with the same email
        if(user)
            return res.status(400).send({message: "user already registered"});
        
        //else register the user
        else
        {
            user = await User.create(req.body);

            //Creating a token for the user
            const token = generateToken(user);
            return res.status(200).send({user,token});
        }
    }
    catch(err)
    {
        return res.status(500).send({message: err.message})
    }
}

// Logging in functionality
const login = async (req,res) => {
    try{

        //Checking if there is a user registered with the email address provided
        const user = await User.findOne({email : req.body.email});

        //if the user does not exist
        if(!user)
            return res.status(400).send({message : 'Invalid Credentials'});
        
        //if the user exists. check if the password matches
        const match = user.checkPassword(req.body.password);

        //if it does not match
        if(!match)
            return res.status(400).send({message : 'Invalid Credentials'});
        
        //if it matches, login succesful and return Token
        const token = generateToken(user);
        return res.status(200).send({user,token,message : 'Logged in successfully'});


    }
    catch(err)
    {
        return res.status(500).send({message: err.message})
    }
}

module.exports = {register,login};