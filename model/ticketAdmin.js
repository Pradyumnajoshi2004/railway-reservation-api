const mongoose = require("mongoose")

const ticketAdminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    admin_number:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"admin"
    }
})

module.exports = mongoose.model("ticketadmin",ticketAdminSchema)
