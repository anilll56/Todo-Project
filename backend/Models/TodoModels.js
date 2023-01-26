const mongoose  = require("mongoose");


const todoSchema = new mongoose.Schema({
    text : {
        type : String, 
        required : true
    },
    completed : {
        type : Boolean,
         default : false
    },
    important : {
         type : Boolean,
         default : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    group: { 
        type: String,
        required : true 
     }
});

module.exports = mongoose.model("Todo", todoSchema);