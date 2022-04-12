const express = require('express');
const Post = require('../models/post.model');
const router = express.Router();

const authenticate = require('../middlewares/authenticate');
const authorise = require('../middlewares/authorise');


// CRUD Operation With Validation
router.post('',authenticate, async (req,res) => {
    req.body.userId = req.user._id;
    try{
        const post = await Post.create(req.body);
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message})
    }
});

router.get('/',authenticate,authorise(["admin","user"]), async (req,res) => {
    try{
        const post = await Post.find();
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

router.patch('/:id',authenticate, authorise(["admin","dev"]), async (req,res) => {
    req.body.userId = req.user._id;
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body, {new : true});
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

router.delete('/:id',authenticate, authorise(["admin","dev"]), async (req,res) => {
    req.body.userId = req.user._id;
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});


module.exports = router;