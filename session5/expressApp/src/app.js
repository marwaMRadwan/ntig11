//npm init --y
//npm i express
//npm i -g nodemon
const express=require("express")
const app = express()
//routes
// app.get("", (req,res)=>{
//     res.send("hello")
// })
// app.get('/x', (req,res)=>{
//     res.send("<h3>hello in our apgghdcfp 6</h3>")
// })
// app.get('/y', (req,res)=>{
//     res.send({a:1})
// })
//static=> images, css, js, html - views=> template engine - partials
//static files
const path = require('path')
// console.log(__filename)
const staticFilesDir = path.join( __dirname , "../public")
// console.log(staticFilesDir)
app.use(express.static(staticFilesDir))

app.set('view engine', 'hbs')
app.get("", (req,res)=>{
    res.render('home')
})
app.listen(3000,()=>{
    console.log("on http://localhost:3000 ")
}) //localhost:3000