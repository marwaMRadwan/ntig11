const router = require('express').Router()
const UserController = require("../controller/user.controller")

router.post("/register", UserController.register)
router.patch("/activate/:id", UserController.activateUser)
router.put("/addHoppies/:id", UserController.addHoppies)
router.post('/login', UserController.login)

module.exports = router