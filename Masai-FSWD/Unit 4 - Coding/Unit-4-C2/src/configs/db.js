const mongoose = require('mongoose');

// Connect to mongodb server

const connect = () => {
    return mongoose.connect('mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/unit4_c2?retryWrites=true&w=majority');
}


module.exports = connect;