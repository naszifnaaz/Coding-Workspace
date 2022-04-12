const express = require('express');
const router = express.Router();
const fs = require('fs');

// importing models
const User = require('../models/user.model');
const Gallery = require('../models/gallery.model');

//importing middlewares
const upload = require('../middlewares/upload');

//Endpoint for getting all users
router.get('/', async (req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send({users : users});
    }
    catch(err){
        return res.status(500).send({message : err.message});
    }
});

// Endpoint for creating a user
router.post('/',upload.single('profilePic'), async (req, res) => {
    try{
        const user = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            profilePic : req.file.path
        });
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message : err.message});
    }
});

//Endpoint for deleting a user
router.delete('/:id', async (req, res) => {
    try{
        const deleteFile = await User.find({_id: req.params.id});
        const delPath = deleteFile[0].profilePic;
        fs.unlink(delPath, (err) => {
            if (err) throw err;
            console.log('successfully deleted!');
          });
        const user = await User.findByIdAndDelete(req.params.id);
        
         return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message : err.message});
    }
})

module.exports = router;