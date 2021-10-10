const router = require("express").Router()
const userController = require('../controller/user')

router.get("", userController.goAll)
router.get("/all", userController.showAll)
router.get("/single", userController.showSingle)
router.get("/edit", userController.edit)
router.get("/delete", userController.del)

router.get("/add", userController.add)

router.get("/addPost", userController.addPost)
router.post("/addPost", userController.sendData)

module.exports = router