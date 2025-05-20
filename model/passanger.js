const mongoose = require("mongoose")

const passangerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("passanger",passangerSchema)
