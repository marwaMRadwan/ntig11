const router = require("express").Router()
const userController = require('../controller/user')

router.get("/single/:id", userController.showSingle)
router.get("/edit/:id", userController.edit)
router.get("/delete/:id", userController.del)

router.get("", userController.goAll)
router.get("/all", userController.showAll)
router.get("/add", userController.add)
router.get("/addPost", userController.addPost)
router.post("/addPost", userController.sendData)

module.exports = router