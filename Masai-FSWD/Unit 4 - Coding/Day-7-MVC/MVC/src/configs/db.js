const mongoose = require('mongoose');

//Connect to MongoDB
const connect = () => {
    return mongoose.connect("mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-atlas?retryWrites=true&w=majority");
}

module.exports = connect;