const express=require("express")
const path = require('path')
const hbs = require('hbs')

const app = express()

const staticFilesDir = path.join( __dirname , "../public")
const viewsfiles = path.join(__dirname, "../frontend/views")
const partialfiles = path.join(__dirname, "../frontend/layouts")

app.set('view engine', 'hbs')

app.use(express.static(staticFilesDir))
app.set('views', viewsfiles)
hbs.registerPartials(partialfiles)

app.get("", (req,res)=>{
    res.render('home', {
        name:"marwa radwan",
        age:36,
        job:"developer"
    })
})

app.get("/test", (req,res)=>{
    res.render('test')
})
app.listen(3000,()=>{
    console.log("on http://localhost:3000 ")
})

