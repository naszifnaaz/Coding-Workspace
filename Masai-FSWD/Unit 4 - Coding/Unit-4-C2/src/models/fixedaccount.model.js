const mongoose = require('mongoose');

const fixedaccountSchema = new mongoose.Schema(
    {
        account_number : {type : Number, required: true, unique: true},
        balance : {type : Number, required: true},
        interestRate : {type : Number, required: true},
        startDate : {type : String, required: true},
        maturityDate : {type : String, required: true},
        userId : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required: true},
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

const FixedAccount = mongoose.model('fixedaccount',fixedaccountSchema);

module.exports = FixedAccount;