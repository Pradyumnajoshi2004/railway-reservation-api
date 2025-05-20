const mongoose = require("mongoose")

const StationSchema = new mongoose.Schema({
    city:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("station",StationSchema)
