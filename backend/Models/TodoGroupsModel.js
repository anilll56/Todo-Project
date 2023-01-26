const mongoose  = require("mongoose");


const todoGroupSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});


module.exports = mongoose.model("Group", todoGroupSchema);