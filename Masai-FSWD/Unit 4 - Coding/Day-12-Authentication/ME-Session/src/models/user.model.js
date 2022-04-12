const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Create user schema
const userSchema = new mongoose.Schema
(
    {
        email : {type : String, required: true, unique: true},
        password : {type : String, required: true}
    },
    {
       versionKey : false,
       timestamps : true 
    }
);

//Hashing the passoword before stoting it using bcrypt.
//this keyword works different when used with arrow functions
userSchema.pre('save', function (next) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    return next();
})

//comparing the password against hashed password
userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

//creating user models
const User = mongoose.model('user',userSchema);

module.exports = User;