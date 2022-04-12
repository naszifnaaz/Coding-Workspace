const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');
const authenticate = require('../middlewares/authenticate');


router.post('/',authenticate, async (req,res) => {
    req.body.userId = req.userId;
    try{
        const post = await Post.create(req.body);
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

router.get('/',authenticate, async (req,res) => {
    try{
        const post = await Post.find();
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

router.patch('/:id',authenticate, async (req,res) => {
    req.body.userId = req.userId;
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body, {new : true});
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

router.delete('/:id',authenticate, async (req,res) => {
    req.body.userId = req.userId;
    try{
        const post = await Post.findByIdAndUpdate(req.params.id);
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});


module.exports = router;