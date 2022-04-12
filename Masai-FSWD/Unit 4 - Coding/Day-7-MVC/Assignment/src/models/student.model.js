//Student Schema
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        rollId : {type : Number, required: true},
        currentBatch : {type : String, required: true}
    },
    {
        versionKey : false,
        timestamps : true
    }
);

const Student = mongoose.model('student',studentSchema);

module.exports = Student;