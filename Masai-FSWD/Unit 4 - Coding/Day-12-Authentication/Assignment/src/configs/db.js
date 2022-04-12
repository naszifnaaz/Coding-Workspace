require('dotenv').config();
const mongoose = require('mongoose');


const connect = () => {
    return mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@naaz-cluster.omf4h.mongodb.net/authentication_sample?retryWrites=true&w=majority`);
};

module.exports = connect;