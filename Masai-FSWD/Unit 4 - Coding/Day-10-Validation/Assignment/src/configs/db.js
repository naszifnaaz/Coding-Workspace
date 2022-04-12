const mongoose = require('mongoose');

//connect to mongodb

const connect = () => {
    mongoose.connect('mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/validation?retryWrites=true&w=majority')
};

module.exports = connect;