const { getStation, postStation } = require("../controller/stationController")

const route = require("express").Router()
const auth = require("../middleware/auth")
const admin  = require("../middleware/admin")
route.get("/",getStation)

route.post("/",[auth,admin],postStation)


module.exports  = route
