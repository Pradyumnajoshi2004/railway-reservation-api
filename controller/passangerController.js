const Passanger = require("../model/passanger")

exports.getPassanges = async (req,res) => {
    try {
        const data = await Passanger.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

exports.postPassangers = async (req,res) => {
    try {
        const data = await Passjanger.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:errors.message})
    }
}

exports.updatePassangers = async (req,res) => {
    try {
        const data = await Passanger.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deletePassangers = async (req,res) => {
    try {
        const data = await Passanger.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}