const router = require('express').Router()

router.get("/test", (req, res)=> res.send("test user"))

module.exports = router