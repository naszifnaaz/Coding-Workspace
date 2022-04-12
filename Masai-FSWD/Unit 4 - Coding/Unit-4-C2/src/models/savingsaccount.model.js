const mongoose = require('mongoose');

const savingsaccountSchema = new mongoose.Schema(
    {
        account_number : {type : Number, required: true, unique: true},
        balance : {type : Number, required: true},
        interestRate : {type : Number, required: true},
        userId : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required: true},
    },
    { 
        versionKey : false,
        timestamps : true
    }
);

const SavingsAccount = mongoose.model('savingsaccount',savingsaccountSchema);

module.exports = SavingsAccount;