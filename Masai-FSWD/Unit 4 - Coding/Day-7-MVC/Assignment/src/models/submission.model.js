const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema
(
    {
        evaluationId : {type : mongoose.Schema.Types.ObjectId, ref : 'evaluation', required: true},
        studentId : {type : mongoose.Schema.Types.ObjectId, ref :'user', required: true},
        marks : {type : Number, required: true},
        result : {type : String, enum : ["pass", "fail","on review"], default : "on review"}
    },
    {
        versionKey : false,
        timestamps : true
    }
);

const Submission = mongoose.model('submission',submissionSchema);

module.exports = Submission;