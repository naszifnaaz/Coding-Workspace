const mongoose = require('mongoose');
require('dotenv').config();


const connect = () => {
    return mongoose.connect(`mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@naaz-cluster.omf4h.mongodb.net/oauth?retryWrites=true&w=majority`)
}

module.exports = connect;