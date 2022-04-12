const mongoose = require('mongoose');

//Create product schema

const productSchema = new mongoose.Schema(
    {
    title : {type : 'string', required: true},
    price : {type : 'number', required: true},
    imageURL : {type : 'string', required: true}
    },
    {
    versionKey : false,
    timestamps : true
    }
);

// Create product model

const Product = mongoose.model('product',productSchema);

module.exports = Product;