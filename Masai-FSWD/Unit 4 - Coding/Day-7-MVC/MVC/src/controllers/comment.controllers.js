const express = require('express');
const Comment = require('../models/comment.models')
const app = express();


//COMMENT CRUD

//get Comments
//populating 2 ids posts and user
app.get('', async (req,res) => {
    try{
        const comments = await Comment.find().populate({
            path : 'postId',
            select : ['title','description']
        }).populate({
            path : 'userId',
            select : {firstName : 1,email : 1}
        }).lean().exec();
        return res.status(200).send(comments);
    }
    catch(err) {
        return res.status(500).send({message: err.message});
    }
});

//single comment
//if you want to populate userid inside postid like nested,  
app.get('/:id', async (req,res) => {
    try{
        const comment = await Comment.findById(req.params.id)
        .populate({
            path : 'postId',
            select : ['title','description'],
            populate : {path : 'userId', select : ['firstName','email']}
        }).populate({
            path : 'userId',
            select : ['firstName','email']
        }).lean().exec();
        return res.status(200).send(comment);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

//create comment
app.post('', async (req,res) => {
    try{
        const comment = await Comment.create(req.body);
        return res.status(200).send(comment);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

//update comment / patch
app.patch('/:id', async (req,res) => {
    try{
        const user = await Comment.findByIdAndUpdate(req.params.id,req.body, {new : true});
        return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

//delete comment
app.delete('/:id', async (req,res) => {
    try{
        const user = await Comment.findOneAndDelete(req.params.id);
        return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

module.exports = app;