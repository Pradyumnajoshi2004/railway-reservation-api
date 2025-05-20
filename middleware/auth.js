const jwt = require("jsonwebtoken")

const auth= async (req,res,next) => {
    try {
        const token = req.header("token")
        const verifyToken = await jwt.verify(token,process.env.SEC)

        if(!verifyToken) return res.status(500).json({errors:true,message:"the token is invalid"})
        
        next()
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

module.exports = auth