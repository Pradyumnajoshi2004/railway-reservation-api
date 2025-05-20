const { getTrain, postTrain,  deleteTrain, updateTrain } = require("../controller/trainDetails")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/",getTrain)

route.post("/",[auth,admin],postTrain)

route.put("/:id",updateTrain)

route.delete("/:id",[auth,admin],deleteTrain)

module.exports  = route