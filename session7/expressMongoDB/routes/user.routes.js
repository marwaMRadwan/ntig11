const router = require('express').Router()
const User = require('../controller/user.controller')

router.get("/add", User.addUser)
router.post("/add", User.addUserData)


router.get("", User.showAll)
router.get("/all", User.showAll)
router.get("/single/:id", User.showSingle)
router.get("/edit/:id", User.editUser)
router.get("/delete/:id", User.del)

module.exports = router