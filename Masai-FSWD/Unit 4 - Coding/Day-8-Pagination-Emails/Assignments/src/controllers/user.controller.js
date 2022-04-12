const express = require('express');
const app = require('..');
const router = express.Router();
const transporter = require('../configs/mail');

const User = require('../models/user.model');

// all users endpoints
router.get('', async (req, res) => {
    try{
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 20;
        const skip = (page - 1) * pagesize;
        
        const users = await User.find().skip(skip).limit(pagesize).lean().exec();
        return res.status(200).send(users);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }
});


// create a user and email them
router.post('', async(req,res) => {
    try
    {
        const user = await User.create(req.body);
        // to user
        transporter.sendMail({
            from: '"ABC System 👻" <admin@example.com>', // sender address
            to: user.email, // list of receivers
            subject: `Welcome to ABC system ${user.first_name} ${user.last_name}  `, // Subject line
            text: `Hi, ${user.first_name} Please confirm your email address.`, // plain text body
            html: `Hi, ${user.first_name} Please confirm your email address.`, // html body
          });

        //to admins
          transporter.sendMail({
            from: '"ABC System 👻" <admin@example.com>', // sender address
            to: "admin1@example.com, admin2@example.com, admin3@example.com, admin4@example.com, admin5@example.com", // list of receivers
            subject: `${user.first_name} ${user.last_name} has registered with us  `, // Subject line
            text: `Please welcome, ${user.first_name} ${user.last_name}`, // plain text body
            html: `Please welcome, ${user.first_name} ${user.last_name}`, // html body
          });

        return res.status(201).send(user);
    }
    catch(err)
    {
       return res.status(500).send(err.message);
    }
})

module.exports = router;