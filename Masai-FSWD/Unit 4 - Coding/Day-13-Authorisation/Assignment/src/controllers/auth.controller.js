const User = require('../models/user.model');
var jwt = require('jsonwebtoken');
require('dotenv').config();

//registering new user
const register = async (req,res) => {
    try{
        let user = await User.findOne({email : req.params.email});

        if(user)
            return res.status(200).send({message : 'User already registered'});
        
        user = await User.create(req.body);
        return res.status(200).send({message : 'User successfully registered',user : user});
    }
    catch(err)
    {
        return res.status(400).send({message : err.message});
    }
}

//login with an existing user
const login = async (req, res) => {
    try{
        let user = await User.findOne({email : req.body.email});
        
        if(!user)
            return res.status(404).send({message : 'Invalid Credentials'});
        
        const match = user.checkPassword(req.body.password);

        if(!match)
            return res.status(404).send({message : 'Invalid Credentials'});
        
        //generating token for user
        const token = generateToken(user);
        return res.status(200).send({message : 'Logged in successfully',user,token});   
    }
    catch(err){
        return res.status(400).send({message : err.message});
    }
}

//generating bearer token
function generateToken(user)
{
    const token = jwt.sign({user},process.env.JWT_SECRET_KEY);
    return token;
}


module.exports = {register,login};