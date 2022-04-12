const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

//Connect to MongoDB
const connect = () => {
    return mongoose.connect("mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/relations?retryWrites=true&w=majority");
}

//Create User Schema
const userSchema = new mongoose.Schema(
    {
        firstName : {type : String, required: true},
        lastName : {type : String, required: false},
        email : {type : String, required: true, unique: true},
        password : {type : String, required: true}
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

//Create User model
const User = mongoose.model('user',userSchema);

//Create Post Schema
const postSchema = new mongoose.Schema(
    {
        title : {type : String, required: true},
        description : {type : String, required: true},
        userId : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required: true}
    },
    {
       versionKey : false,
       timestamps : true 
    }
);

//Create Post model
const Post = mongoose.model("post",postSchema);

//Create Comments Schema
const commentSchema = new mongoose.Schema(
    {
        body : {type : String, required: true},
        postId : {type : mongoose.Schema.Types.ObjectId, ref : 'post', required: true},
        userId : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required: true}
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

//Create comment model
const Comment = mongoose.model("comment",commentSchema);

//CRUB operations
//users CRUD

//read / get

//getting all users
app.get('/users', async (req,res) => {
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
app.get('/users/:id', async (req,res) => {
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
app.post('/users', async (req,res) => {
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
app.patch('/users/:id', async (req, res) => {
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
app.delete('/users/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({user: user});
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});


// POSTS CRUD

//all posts
app.get('/posts', async (req,res) => {
    try{
        const posts = await Post.find().lean().exec();
        return res.status(200).send(posts);
    }
    catch(err) {
        return res.status(500).send({message:err.message});
    }
});

//single post
app.get('/posts/:id', async (req,res) => {
    try{
        const post = await Post.findById(req.params.id).lean().exec();
        return res.status(200).send(post);
    }
    catch(err)
    {
        return res.status(500).send({message:err.message});
    }
});

//create
app.post('/posts', async (req,res) => {
    try{
        const post = await Post.create(req.body);
        return res.status(200).send(post);
    }
    catch(err) {
        return res.status(500).send({message:err.message});
    }
});

//patch 
app.patch('/posts/:id', async (req,res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body, {new : true});
        return res.status(200).send(post);
    }
    catch(err) {
        return res.status(500).send({message:err.message});
    }
});

//delete
app.delete('/posts/:id', async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).send({user: post});
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});


//COMMENT CRUD

//get Comments
app.get('/comments', async (req,res) => {
    try{
        const comments = await Comment.find().lean().exec();
        return res.status(200).send(comments);
    }
    catch(err) {
        return res.status(500).send({message: err.message});
    }
});

//single comment
app.get('/comments/:id', async (req,res) => {
    try{
        const comment = await Comment.findById(req.params.id);
        return res.status(200).send(comment);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

//create comment
app.post('/comments', async (req,res) => {
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
app.patch('/comments/:id', async (req,res) => {
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
app.delete('/comments/:id', async (req,res) => {
    try{
        const user = await Comment.findOneAndDelete(req.params.id);
        return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});



app.listen(5000, async () => {
    try{
        await connect();
        console.log("Connection Successful");
    }
    catch(err) {
        console.log("Something went wrong!");
        console.log(err);
    }
});