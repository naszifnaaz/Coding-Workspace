const express = require("express");
const transporter = require('../configs/mail');
const router = express.Router();
const path = require('path');

const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 20;
    const skip = (page - 1) * pagesize;
    const products = await Product.find()
      .skip(skip)
      .limit(pagesize)
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await Product.find().countDocuments()) / pagesize
    );
    return res.status(200).send({ products, totalPages });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post('/', async (req,res) => {
    try{
        const product = await Product.create(req.body);

         // send mail with defined transport object
        transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Success ✔", // Subject line
            text: "Product listed Successfully", // plain text body
            // html: "<b>Product listed Successfully</b>", // html body
            alternatives: [
                {
                    contentType: 'text/html',
                    path : path.join(__dirname,'../mailers/success-msg.html')
                },
                {
                    filename : "product-details.txt",
                    path : path.join(__dirname,'../mailers/attachment-msg.txt')
                }
            ]
        });

        return res.status(201).send(product);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }
})

module.exports = router;
