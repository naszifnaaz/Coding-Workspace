const express = require('express');
const router = express.Router();

const MasterAccount = require('../models/masterAccount.model');
const User = require('../models/user.model');
const Branch = require('../models/branch.model');

router.get('/', async (req, res) => {
    try{
        const masteraccounts = await MasterAccount.find()
        .populate('userId')
        .populate('branchId')
        .lean().exec();
        return res.status(200).send(masteraccounts);
    }
    catch(err){
        return res.status(501).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const account = await MasterAccount.find(req.params.id)
        .populate({
            path : 'userId',
            select : {account_number : 1, balance : 1, _id : 0}
            .lean().exec()
        })
    }
    catch(err) {
        return res.status(500).send(err.message);
    }
})

module.exports = router;