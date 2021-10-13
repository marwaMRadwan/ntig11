const router = require('express').Router()
const UserController = require("../controller/user.controller")

router.post("/register", UserController.register)
router.patch("/activate/:id", UserController.activateUser)
module.exports = router