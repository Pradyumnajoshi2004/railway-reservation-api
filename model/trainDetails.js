const mongoose = require("mongoose")

const trainDetailsSchema = new mongoose.Schema({
    train_name:{
        type:String,
        required:true
    },
    trainType:{
        type:String,
        required:true
    },
    passagers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"passanger",
            required:true
        }
    ],
    train_route:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"station"
        }
    ]
})

module.exports = mongoose.model("traindetails",trainDetailsSchema)
