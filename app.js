const mongoose = require("mongoose")
const express  = require("express")
const cors = require("cors")
const passagersRoute = require("./route/passangersRoute")
const stationRoute = require("./route/stationRoute")
const trainAdminRoute = require("./route/trainAdminRoute")
const trainDetailsRoute = require("./route/trainDetails")
const app = express()
require("dotenv/config")

// middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("home")
})

// middleware
app.use("/api/admin",trainAdminRoute)
app.use("/api/passangers",passagersRoute)
app.use("/api/train",trainDetailsRoute)
app.use("/api/stations",stationRoute)

// db connections
app.listen(process.env.PORT || 5000)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
    
}

db()