const fs = require('fs')
const yargs = require('yargs')
const MyValidator = require('./myValidator')
//read from file
readData = () =>{
    let data
    try{
        data = JSON.parse( fs.readFileSync('users.json'))
        if(!Array.isArray(data)) throw new Error('data not an array')
        console.log(`data tmam`)
    }
    catch(e){
        data = []
        console.log(`kan fe error fa 7atena array fady ${e}`)
    }
    return data
}
//write to file
writeData = (allUsers) =>{
    try{
        fs.writeFileSync('users.json', JSON.stringify(allUsers))
        console.log(`data added inside file`)
    }
    catch(e){
        console.log(`error in write to file ${e}`)
    }
}
//add user yarg
yargs.command({
    command: "addNewUser",
    builder:{
        id:{ type:"string", demandOption: true},
        name:{ type:"string", demandOption: true},
        job:{ type:"string", demandOption: true},
        email:{ type:"string", demandOption: true},
    },
    handler:function(argv){
        try{
            if(!MyValidator.isEmail(argv.email)) throw new Error('invalid email')
            if(!MyValidator.isId(argv.id, ["1","2","3"])) throw new Error('invalid id')
            if(!MyValidator.isName(argv.name)) throw new Error('invalid name')
            if(!MyValidator.isValidJob(argv.job, ["developer", "instructor", "ceo", "employee"])) throw new Error('invalid job')

            let myData = readData()
            if(!MyValidator.isUnique(myData, argv.id, "id")) throw new Error('id used before')
            if(!MyValidator.isUnique(myData, argv.email, "email")) throw new Error('email used before')

            let user = { id:argv.id, name:argv.name, email:argv.email, job:argv.job, tasks:[] }    
            myData.push(user)
            writeData(myData)
        }
        catch(e){
            console.log(e.message)
        }
    }
})
//add task to user yarg
yargs.command({
    command:"addTaskToUser",
    builder:{
        taskTitle:{type:"string", demandOption:true},
        taskDetails:{type:"string", demandOption:true},
        userId:{type:"string", demandOption:true},
    },
    handler:function(argv){
        let allUsers = readData()
        let ind = allUsers.findIndex(ele=> ele.id == argv.userId)
        if(ind==-1) return console.log('user not found')
        taskDate = new Date()
        const task ={ 
            taskId:Date.now(),
            taskTitle:argv.taskTitle , 
            taskDetails:argv.taskDetails, 
            createdAt: `${taskDate.getDate()}-${taskDate.getMonth()+1}-${taskDate.getFullYear()}` 
        }
       console.log(allUsers[ind])
       console.log(allUsers[ind].tasks)
        allUsers[ind].tasks.push(task)
        writeData(allUsers)
    }
})
// delete task from user yarg

//search user

//show all users

// show single user

//edit user

// delete user

yargs.argv