const mongoose = require('mongoose');


// connect to mongodb

const connect = () => {
    return mongoose.connect('mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/mvc-relations?retryWrites=true&w=majority')
};

module.exports = connect;