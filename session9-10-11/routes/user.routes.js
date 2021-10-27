const router = require('express').Router()
const UserController = require("../controller/user.controller")
const upload = require("../middleware/fileUpload")
const auth = require('../middleware/auth.middleware')
router.post("/register", UserController.register)
router.patch("/activate/:id", UserController.activateUser)
router.post("/addHoppies", auth, UserController.addHoppies)
router.post('/login', UserController.login)
router.get('/profile',auth, UserController.profile)
router.post("/logoutAll", auth, UserController.logoutAll)
router.post("/logout", auth, UserController.logout)
router.post('/addImg',auth, upload.single("img"),UserController.addImg)
router.post("/addimage", auth, upload.single("img"), UserController.addImage);
module.exports = router