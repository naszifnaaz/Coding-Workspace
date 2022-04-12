const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema
(
    {
        email : {type : String, required : true, unique: true},
        password : {type : String, required : true},
        role : [{type : String, required : true}]
    },
    {
        versionKey : false,
        timestamps : true
    }
);

//hashing password before storing
userSchema.pre('save', function(next) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    next();
});

//checking password
userSchema.methods.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}


const User = mongoose.model('user',userSchema);

module.exports = User;