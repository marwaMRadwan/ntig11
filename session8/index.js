const express = require("express")
const Task = require("./myMongoose")
const app= express()
app.use(express.json())
app.post("/add", (req, res)=>{
    let task = new Task(req.body)
    task.save()
    .then(()=> res.send("added")    )
    .catch( e => res.send(e))
})

// {apiStatus: true, data: data, message:"data inserted", statuscode:200}
app.post("/addTask", async(req, res)=>{
    try
    {
        let task = new Task(req.body)
        await task.save()
        res.status(200).send({
            apiStatus:true,
            data: task,
            message: "data inserted succefully "
        })
    }
    catch(e) {
        res.status(500).send({
            apiStatus:false,
            data: e.message,
            message: "error inserting data"
        })
    }
})

app.get('/allTasks', async(req,res)=>{
    try{
        let allTasks = await Task.find()
        res.status(200).send({
            apiStatus:true,
            data: allTasks,
            message:"data featched"
        })
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data: e.message, message:"error loading data"})
    }
})

app.get('/allTasks/:id', async(req,res)=>{
    try{
        let TaskData = await Task.findById(req.params.id)
        if(!TaskData) res.status(404).send({apiStatus:false, data:"", message:"user not found"})
        res.status(200).send({
            apiStatus:true,
            data: TaskData,
            message:"data featched"
        })
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data: e.message, message:"error loading data"})
    }
})


app.delete('/allTasks/:id', async(req,res)=>{
    try{
        let TaskData = await Task.findByIdAndDelete(req.params.id)
        if(!TaskData) res.status(404).send({apiStatus:false, data:"", message:"user not found"})
        res.status(200).send({
            apiStatus:true,
            data: "deleted",
            message:"data deleted"
        })
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data: e.message, message:"error loading data"})
    }
})
app.listen(3000, ()=> console.log("server up"))