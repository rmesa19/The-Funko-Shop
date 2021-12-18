const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
        
    },
    number:{
        type:Number,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    owners:{
        type:Array,
        required:false
    }
})

module.exports = mongoose.model("Item", ItemSchema);