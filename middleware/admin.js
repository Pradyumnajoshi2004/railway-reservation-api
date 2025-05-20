const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const admin = async (req,res,next) => {
    try {
        const token = req.header("token")
        const data = jwt.decode(token)
        console.log(data);
        req.user = data
        if(req.user.role != "admin") return res.status(500).json({errors:true,message:"you are not authorized"})

        next()
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
    
}

module.exports = admin