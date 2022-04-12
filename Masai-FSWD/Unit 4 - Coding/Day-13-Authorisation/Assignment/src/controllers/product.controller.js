const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');
const User = require('../models/user.model');

const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

//GET
router.get('/',authenticate,authorize(['admin','user','seller']), async (req, res) => {
    try{
        const products = await Product.find()
        .populate('userId')
        .lean().exec();
        return res.status(200).send(products);
    }
    catch(err)
    {
        return res.status(400).send({message : err.message});
    }
});

//POST
router.post('/',authenticate,authorize(['admin','seller']), async (req,res) => {
    req.body.userId = req.user._id;
    try{
        const product = await Product.create(req.body);
        return res.status(200).send(product);
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});

//PATCH or UPDATE
router.patch('/:id',authenticate,authorize(['admin','seller']), async (req, res) => {
    req.body.userId = req.user._id;
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new : true});
        return res.status(200).send({message : 'Product updated successfully', product : product});
    }
    catch(err){
        return res.status(400).send({message : err.message});
    }
});

//DELETE
router.delete('/', authenticate, authorize(['admin','seller']), async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).send({message : 'Product deleted successfully', product : product});
    }
    catch(err){
        return res.status(400).send({message : err.message});
    }
});

module.exports = router;


