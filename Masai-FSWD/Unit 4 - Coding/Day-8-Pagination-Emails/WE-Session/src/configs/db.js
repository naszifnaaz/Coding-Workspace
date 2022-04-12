const mongoose = require('mongoose');

//connect to mongodb server

const connect= () => {
    mongoose.connect("mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/sample_pagination?retryWrites=true&w=majority");
}

module.exports = connect;