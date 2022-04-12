const mongoose = require('mongoose');

// Create user schema
const userSchema = new mongoose.Schema(
    {
        first_name : {type : String, required: true},
        last_name : {type : String, required: true},
        email : {type : String, required: true} 
    },
    {
        versionKey : false,
        timestamps : true

    }
);

// create user model
const User = mongoose.model('user',userSchema);

module.exports = User;