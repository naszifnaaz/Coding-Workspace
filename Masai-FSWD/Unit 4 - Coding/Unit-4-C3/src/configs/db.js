const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/unit4_c3?retryWrites=true&w=majority')
}

module.exports = connect;