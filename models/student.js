const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    class:{
        type: String,
        required:true,
    },
    marks:{
        type:Number,
        required:true,
    },
    percentage:{
        type: String,
        required: true,
    },
    code:{
        type:String,
        required: true,
    },
});
 module.exports = mongoose.model("Student", newSchema);