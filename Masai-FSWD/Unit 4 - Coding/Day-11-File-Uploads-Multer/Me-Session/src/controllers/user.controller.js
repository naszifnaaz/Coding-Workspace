const express = require('express');
const router = express.Router();

const uploads = require('../middlewares/upload');

const User = require('../models/user.model');

router.get('/', async (req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.post('/',uploads.single('profilePic'), async (req, res) => {
    try{
        /*we cannot use req.body here because the text fields are in the req.body object
        and the files are in the req.file
        */
        const users = await User.create({
            firstName: req.body.firstName,
            profilePic : req.file.path,
            email : req.body.email
        });
        return res.status(200).send(users);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});



router.post('/multiple',uploads.array('profilePic',2), async (req, res) => {
    try{
        /*
        when storing multiple files, req.file won't work since it now has an array of elements, so we need to loop over it
        */
       const filePath = req.files.map((file) => {
           return file.path
       });

       const user = await User.create({
        firstName: req.body.firstName,
        email: req.body.email,
        profilePic: filePath
       })
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});



module.exports = router;