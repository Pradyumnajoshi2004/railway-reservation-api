const { getPassanges, postPassangers, updatePassangers, deletePassangers } = require("../controller/passangerController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")
const vaildateRoute = require("../validator.js/routeValidator")

const route = require("express").Router()

route.get("/",getPassanges)

route.post("/",[auth,admin],vaildateRoute,postPassangers)

route.put("/:id",updatePassangers)

route.delete("/:id",[auth,admin],deletePassangers)

module.exports = route