const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/file_uploads?retryWrites=true&w=majority');
}

module.exports = connect;