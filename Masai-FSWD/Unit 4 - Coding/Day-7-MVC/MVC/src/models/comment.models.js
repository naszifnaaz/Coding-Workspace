const mongoose = require('mongoose');

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

module.exports = Comment;