const mongoose = require('mongoose');

//create userSchema

const userSchema = new mongoose.Schema
(
    {
        firstName : {type : String, required: true},
        lastName : {type : String, required: true},
        gender : {type : String, required: true},
        dateOfBirth : {type : String, required: true},
        userType : {type : String, required: true, enum: ['student','admin','instructor']}
    },
    {
        versionKey : false,
        timestamps : true
    }
);

// create user model
const User = mongoose.model('user',userSchema);

module.exports = User;