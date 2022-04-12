const express = require('express');
const app = express();
const Post = require('../models/post.models');
const Comment = require('../models/comment.models');

// POSTS CRUD
//all posts
app.get('', async (req,res) => {
    try{
        const posts = await Post.find().populate({
            path : 'userId',
            select : ['firstName','email']
        }).lean().exec();
        return res.status(200).send(posts);
    }
    catch(err) {
        return res.status(500).send({message:err.message});
    }
});

//single post
app.get('/:id', async (req,res) => {
    try{
        const post = await Post.findById(req.params.id).populate({
            path : 'userId',
            select : {firstName : 1, _id : 0}
        }).lean().exec();
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message:err.message});
    }
});

//get all comments in a post
app.get('/:postId/comments', async (req,res) => {
    try{
        const comments = await Comment.find({postId : req.params.postId}).populate({
            path : 'postId',
            select : ['title'],
            populate : {path : 'userId', select : ['firstName','email']}
        })
        .populate({
            path : 'userId',
            select : ['firstName','email']
        }).lean().exec();
        return res.status(200).send(comments);
    }
    catch(err)
    {
        return res.status(500).send({message:err.message});
    }
})

//create
app.post('', async (req,res) => {
    try{
        const post = await Post.create(req.body);
        return res.status(200).send(post);
    }
    catch(err) {
        return res.status(500).send({message:err.message});
    }
});

//patch 
app.patch('/:id', async (req,res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body, {new : true}).populate({
            path : "userId",
            select : {firstName : 1, _id : 0}
        }).lean().exec();
        return res.status(200).send(post);
    }
    catch(err) {
        return res.status(500).send({message:err.message});
    }
});

//delete
app.delete('/:id', async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id).populate({
            path : 'userId',
            select : {firstName : 1, _id : 0}
        }).lean().exec();
        return res.status(200).send({user: post});
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

module.exports = app;