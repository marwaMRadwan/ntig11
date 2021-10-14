const router = require('express').Router()
const UserController = require("../controller/user.controller")
const auth = require('../middleware/auth.middleware')
router.post("/register", UserController.register)
router.patch("/activate/:id", UserController.activateUser)
router.put("/addHoppies/:id", UserController.addHoppies)
router.post('/login', UserController.login)
router.get('/profile',auth, UserController.profile)
module.exports = router