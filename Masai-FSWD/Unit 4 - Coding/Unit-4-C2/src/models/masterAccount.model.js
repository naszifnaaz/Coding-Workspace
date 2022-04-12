const mongoose = require('mongoose');

const masterAccountSchema = new mongoose.Schema(
    {
        balance : {type : Number, required: true},
        userId : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required: true},
        branchId : {type : mongoose.Schema.Types.ObjectId, ref : 'branch', required: true}
    },
    {
        versionKey : false,
        timestamps : true
    }
);


const MasterAccount = mongoose.model('masteraccount',masterAccountSchema);

module.exports = MasterAccount;