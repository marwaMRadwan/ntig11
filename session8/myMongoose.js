const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myG11DB", {})
const Task = mongoose.model("Task", { 
    taskTitle:{
        type:String,
        required: true,
        trim:true,
        lowercase:true,
        minlength:5,
        maxlength:10,
        unique:true,
        validate(value){
            if(value.includes("1")) throw new Error('fe rakm 1')
        }
    }, 
    taskNum:{
        type:Number,
        default:50,
        min:10,
        max:300
    }, 
    taskDetails:{
        type:String,
        enum:['a','b', 'c'],
        // match:
    } 
})
// let newTask = new Task({ taskTitle:"title 1", taskType: "type 1",  taskDetails:"details 1" }) 
// newTask.save()
module.exports = Task