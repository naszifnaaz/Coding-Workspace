const mongoose = require('mongoose');

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

module.exports = User;