const express = require('express');
const router = express.Router();

const User = require('../models/user.model');
const Todo = require('../models/todo.model');

const authenticate = require('../middlewares/authenticate');

// GET /todos endpoint that returns all todos of the logged in user
router.get('/',authenticate, async (req, res) => {
    req.body.userId = req.user._id;
    try{
        const todos = await Todo.find({userId : req.body.userId})
        .populate('userId')
        .lean().exec();
        return res.status(200).send({Todo: todos});
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
});

//POST /todos endpoint for the logged in user to create a todo
router.post('/',authenticate, async (req, res) => {
    req.body.userId = req.user._id;
    console.log(req.user);
    try{
        const todo = await Todo.create(req.body);
        return res.status(200).send({message : 'new todo created successfully',Todo: todo});
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
});

/*
GET /todos/:id endpoint where if the todo user is same as logged in user,
then it shows the todo else it will throw an error with status code 401
 */
router.get('/:id',authenticate, async (req, res) => {
    try{
        const todos = await Todo.findById(req.params.id);
        return res.status(200).send({Todo: todos});
    }
    catch(err){
        return res.status(401).send({message: "You need to be logged in"});
    }
});

/*
PATCH /todos/:id endpoint where if the todo user is the same as logged in user then user can update the todo else it will throw an error with status code 401
*/
router.patch('/:id',authenticate, async (req, res) => {
    req.body.userId = req.user._id;
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new : true});
        return res.status(200).send({message : "Updated todo successfully",Todo: todo});
    }
    catch(err){
        return res.status(401).send({message: "You need to be logged in"});
    }
});

/*
DELETE /todos/:id endpoint where if the todo user is the same as logged in user then user can delete the todo else it will throw an error with status code 401
*/
router.delete('/:id',authenticate, async (req, res) => {
    req.body.userId = req.user._id;
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).send({message : "Deleted todo successfully",Todo: todo});
    }
    catch(err){
        return res.status(401).send({message: "You need to be logged in"});
    }
});









module.exports = router;