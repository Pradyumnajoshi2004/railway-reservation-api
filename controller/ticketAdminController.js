const ticketAdmin = require("../model/ticketAdmin")
const TicketAdmin = require("../model/ticketAdmin")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getAdmin = async (req,res) => {
    try {
        const data = await TicketAdmin.find()
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postAdmin = async (req,res) => {
    try {
        const isAdminExists = await TicketAdmin.findOne({admin_number : req.body.admin_number})
        if(isAdminExists) return res.status(500).json({errors:true,message:"the admin already exists "})
        
        req.body.password = await bcryptjs.hash(req.body.password,10) 
        const data = await TicketAdmin.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

exports.updateAdmin = async (req,res) => {
    try {
        const data = await TicketAdmin.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

exports.deleteAdmin = async (req,res) => {
    try {
        const data = await TicketAdmin.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res) => {
    try {
        const isAdminExists = await TicketAdmin.findOne({admin_number : req.body.admin_number}) 
        if(!isAdminExists) return res.status(500).json({errors:true,message:"the username or password is invalid"})
            
        const verifyPassword = await bcryptjs.compare(isAdminExists.password,req.body.password)
        if(!verifyPassword) return res.status(500).json({errors:true,message:"the username or password is invalid"})

        const token = jwt.sign({_id:req.body._id,role:isAdminExists.role},process.env.SEC)
        return res.json({errors:false,data:{token:token,admin:isAdminExists}})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}