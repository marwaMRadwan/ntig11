const express = require('express')   
const app = express()
const hbs = require('hbs')
const path = require("path")

const userRoutes = require('../routes/user.routes')

app.set('view engine', "hbs")

app.use(express.static(path.join(__dirname, "../frontend/public")))
app.set("views", path.join(__dirname, "../frontend/views"))
hbs.registerPartials( path.join(__dirname, "../frontend/layouts"))

app.use(express.urlencoded({extended:true}))

app.use(userRoutes)

module.exports = app