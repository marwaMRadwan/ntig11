const express = require("express")
const hbs = require('hbs')
const path = require('path')

const userRoutes = require("../routes/userRoutes")

const app = express()
app.set("view engine", "hbs")

app.use( express.static( path.join(__dirname, "../public") ) ) 
app.set( 'views', path.join(__dirname, '../frontend/views' ))
hbs.registerPartials(  path.join(__dirname, '../frontend/layouts' ))

app.use(express.urlencoded({extended:true}))

app.use(userRoutes)

app.get("*", (req,res)=>{res.render('errorPage', {pageTitle:"page not found"})})
module.exports = app