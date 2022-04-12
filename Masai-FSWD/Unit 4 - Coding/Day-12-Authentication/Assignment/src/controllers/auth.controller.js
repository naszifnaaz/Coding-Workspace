const User = require('../models/user.model');
var jwt = require('jsonwebtoken');
require('dotenv').config();



const registerUser = async (req,res) => {

    try{
        //if the email already exists
        let user = await User.findOne({email : req.body.email});

        if(user)
            return res.status(400).send({message : 'Email already exists'});
        
       user = await User.create(req.body);
       return res.status(200).send(user); 
    }
    catch(err) {
        return res.status(500).send({message : err.message});
    }
}

const loginUser = async (req,res) => {
    try{
        const user = await User.findOne({email : req.body.email});

        if(!user)
            return res.status(404).send({message : 'Invalid Credentials'});
        
        const match = await user.checkPassword(req.body.password);

        if(!match)
            return res.status(404).send({message : 'Invalid Credentials'});

        var token = jwt.sign({user}, process.env.JWT_TOKEN_KEY);
        return res.status(200).send({user,message : 'Logged in successfully',token})
    }
    catch(err) {
        return res.status(500).send({message : err.message});
    }
}

module.exports = {registerUser,loginUser};
