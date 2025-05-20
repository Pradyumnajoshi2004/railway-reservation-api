const Train = require("../model/trainDetails")

exports.getTrain = async (req,res) => {
    try {
        const data = await Train.find().populate("passagers").populate("train_route")
        return res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.postTrain = async (req,res) => {
    try {
        const data = await Train.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}


exports.updateTrain = async (req,res) => {
    try {
        const data = await Train.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteTrain = async (req,res) => {
    try {
        const data = await Train.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}