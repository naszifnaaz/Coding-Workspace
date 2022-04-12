const mongoose = require('mongoose');

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

module.exports = Post;