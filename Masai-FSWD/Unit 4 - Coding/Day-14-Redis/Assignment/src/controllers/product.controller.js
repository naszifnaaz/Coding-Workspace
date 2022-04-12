const express = require('express');
const app = require('..');
const router = express.Router();
const client = require('../configs/redis');
const Product = require('../models/product.model');

router.post('/', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        const products = await Product.find().lean().exec();
        client.set('products', JSON.stringify(products));
        return res.status(201).send(product);
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
});

router.get('/', async (req, res) => {
    try{
        client.get('products', async function(err,fetchedProducts) {
            if(fetchedProducts)
            {
               const product = JSON.parse(fetchedProducts);
               return res.status(200).send({product : product, redis : true}); 
            }
            else
            {
                const products = await Product.find().lean().exec();
                client.set('products', JSON.stringify(products));
                return res.status(200).send({product : product, redis : false});
            }
        })
    }
    catch(err){
        return res.status(400).send({message : err.message});
    }
});

router.get('/:id', async (req, res) => {
    try{
        client.get(`products.${req.params.id}`, async function (err, fetchedProduct) {
            if(fetchedProduct){
                const product = JSON.parse(fetchedProduct);
                return res.status(200).send({product : product,redis : true});
            }
            else{
                const product = await Product.findOne({id: req.params.id});
                client.set(`products.${req.params.id}`, JSON.stringify(product));
                return res.status(200).send({product : product,redis : false});
            }
        })
    }
    catch(err) {
        return res.status(400).send({message : err.message});
    }
});


router.patch('/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new : true});
        const products = await Product.find().lean().exec();

        client.set(`products.${req.params.id}`, JSON.stringify(product));
        client.set('products', JSON.stringify(products));

        return res.status(200).send(product);
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
});


router.delete('/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        const products = await Product.find().lean().exec();

        client.del(`products.${req.params.id}`);
        client.set('products',JSON.stringify(products));

        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(400).send({message : err.message});
    }
})

module.exports = router;