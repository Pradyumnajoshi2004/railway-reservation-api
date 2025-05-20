const Station = require("../model/stations")

exports.getStation = async (req,res) => {
    try {
        const data = await Station.find()
        return res.josn({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

exports.postStation = async (req,res) => {
    try {
        const isStationExists = await Station.findOne({city:req.body.city})
        if(isStationExists) return res.status(500).json({errors:true,message:"the station is already exists"})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).josn({errors:true,message:error.message})
    }
}