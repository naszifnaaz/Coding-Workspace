const express = require('express');
const app = express();

const User = require('../models/user.models');

//CRUB operations
//users CRUD
//read / get
//getting all users
app.get('', async (req,res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

//getting a single user
app.get('/:id', async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        return res.status(200).send({user : user});
    }
    catch(err)
    {
        res.status(500).send({message: err.message});
    }
});

//post / create
app.post('', async (req,res) => {
    try{
        const user = await User.create(req.body);
        return res.status(201).send({user : user});
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

//patch / update
app.patch('/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body, {new : true});
        return res.status(201).send({user: user});
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

//delete
app.delete('/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({user: user});
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

module.exports = app;