const express = require('express');
const router = express.Router();

const FixedAccount = require('../models/fixedaccount.model');
const User = require('../models/user.model');

router.post('/', async (req, res) => {
    try{
        const fixedaccount = await FixedAccount.create(req.body);
        const detail = await User.find({"_id" : req.body.userId});
        res.status(201).send({detail : detail,fixedAccountDetails : fixedaccount ,message : 'Fixed Account Created for User'})
    }
    catch(err) {
        return res.status(501).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const account = await FixedAccount.findByIdAndDelete(req.params.id);
        return res.status(200).send(account)
    }
    catch(err)
    { 
        res.status(501).send(err.message);
    }
    
});

module.exports = router;