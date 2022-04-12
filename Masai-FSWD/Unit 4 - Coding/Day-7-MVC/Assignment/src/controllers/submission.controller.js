const express = require('express');
const router = express.Router();

const Submission = require('../models/submission.model');
const Evaluation = require('../models/evaluation.model');
const Student = require('../models/student.model');
const User = require('../models/user.model');

router.get('/:id', async (req, res) => {
    try{
        const submission = await Submission
        .find({evaluationId : req.params.id})
        .populate('evaluationId')
        .populate('studentId')
        .lean().exec();
        return res.status(200).send(submission);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

router.get('', async (req, res) => {
    try{
        const topper = await Submission.find().sort({marks : -1}).limit(1)
        .populate('studentId');

        return res.status(200).send({topper: topper});
    }
    catch (err){
        return res.status(500).send({message:err.message});
    }
})


module.exports = router;


