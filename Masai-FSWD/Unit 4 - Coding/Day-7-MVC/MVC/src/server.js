const express = require('express');

const connect = require('./configs/db');


const usersController = require('./controllers/user.controllers');
const postsController = require('./controllers/post.controllers');
const commentsController = require('./controllers/comment.controllers');

const app = express();
app.use(express.json());

app.use('/users', usersController);
app.use('/posts', postsController);
app.use('/comments', commentsController);

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