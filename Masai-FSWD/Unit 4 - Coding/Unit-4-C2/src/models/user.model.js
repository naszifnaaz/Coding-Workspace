const mongoose = require('mongoose');

// Creating user Schema
const userSchema = new mongoose.Schema(
    {
        firstName : {type: String, required: true},
        middleName : {type: String, required: false},
        lastName : {type : String, required: true },
        age : {type: Number, required: true},
        email : {type: String, required: true},
        address : {type: String, required: true},
        gender : {type: String, required: false, default : 'Female'},
        type : {type: String, required: false,default : 'customer'}
    },
    {
        versionKey : false,
        timestamps : true
    }
);

// Creating user model
const User = mongoose.model('user',userSchema);

module.exports = User;