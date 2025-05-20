const { getAdmin, postAdmin, updateAdmin, deleteAdmin } = require("../controller/ticketAdminController")

const route = require("express").Router()

route.get("/",getAdmin)

route.post("/",postAdmin)

route.put("/:id",updateAdmin)

route.delete("/:id",deleteAdmin)

module.exports  = route