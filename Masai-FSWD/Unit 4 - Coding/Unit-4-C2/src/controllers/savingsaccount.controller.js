const express = require('express');
const router = express.Router();

const SavingsAccount = require('../models/savingsaccount.model');
const User = require('../models/user.model');

router.post('/', async (req, res) => {
    try{
        const savingsaccount = await SavingsAccount.create(req.body);
        const detail = await User.find({"_id" : req.body.userId});
        res.status(201).send({detail : detail,savingsAccountDetails : savingsaccount, message : 'Savings Account Created for User'})
    }
    catch(err) {
        return res.status(501).send(err.message);
    }
})

module.exports = router;