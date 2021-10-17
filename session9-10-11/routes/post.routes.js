const router = require('express').Router()
const auth = require("../middleware/auth.middleware")
const postController = require('../controller/post.controller')

router.post('/add', auth, postController.addPost)
module.exports = router