//run required scripts
require('dotenv').config()
require('../db/connection')

//call required packages
const express = require("express")
const cors = require("cors")
//create express intance
const app = express()
app.use(cors())
//use json and urlencoded middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes files 
const userRoutes = require('../routes/user.routes')
const postRoutes = require('../routes/post.routes')

app.use('/user',userRoutes)  // 45 r   /user/x
app.use('/post',postRoutes)  // 35 r => app.get('/x')  /post/x
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
// app.post('/profile', upload.single('avatar'), function (req, res, next) {
// })
module.exports = app