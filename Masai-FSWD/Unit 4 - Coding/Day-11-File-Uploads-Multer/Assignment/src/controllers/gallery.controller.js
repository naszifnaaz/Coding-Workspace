const express = require('express');
const router = express.Router();
const fs = require('fs');

// importing models
const User = require('../models/user.model');
const Gallery = require('../models/gallery.model');

//importing middlewares
const upload = require('../middlewares/upload');

//Getting all gallery
router.get('/', async (req, res) => {
    try{
        const gallery = await Gallery.find()
        .populate('userId')
        .lean().exec();
        return res.status(200).send(gallery);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

//Adding multiple files 
router.post('/', upload.array('user_pictures',5), async (req,res) => {
    try{
        //we have multiple files here to upload
        const filePath = req.files.map((file) => {
            return file.path
        });

        const gallery = await Gallery.create({
            userId : req.body.userId,
            user_pictures : filePath
        });

        return res.status(200).send(gallery);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.delete('/:id', async (req,res) => {
    try{
        const deleteFile = await Gallery.find({_id: req.params.id});
        delPath = deleteFile[0].user_pictures;

        delPath.map((el) => {
            fs.unlink(el, (err) => {
                if (err) throw err;
                console.log('successfully deleted!');
              });
              console.log(el);
        }) 
        
        const gallery = await Gallery.findByIdAndDelete(req.params.id);
        return res.status(200).send(deleteFile);
    }
    catch(err) {
        return res.status(500).send({message: err.message});
    }
})

module.exports = router;