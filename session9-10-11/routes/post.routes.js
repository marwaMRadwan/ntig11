const router = require('express').Router()
const auth = require("../middleware/auth.middleware")
const postController = require('../controller/post.controller')

router.post('/add', auth, postController.addPost)
router.post('/myPosts', auth, postController.myPosts)
module.exports = router