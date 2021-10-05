// const yargs = require('yargs')

// yargs.command({
//     command: "testCommand",
//     handler: function(){
//         console.log('test')
//     }
// })

// yargs.command({
//     command:"myCommand",
//     handler: function(){
//         console.log('ay 7aga')
//     }
// })

// yargs.command({
//     command:"sayHello",
//     describe:"say hello command",
//     builder:{
//         name:{
//             type:"string",
//             describe:"name of user",
//             demandOption: true
//         }
//     },
//     handler: function(argv){
//         console.log(argv)
//         console.log(`hello ${argv.name}`)
//         console.log(argv.x)
//     }
// })

// yargs.argv


// student => id,name, age, grade, email  => add , edit, delete, show all, showsingle

// fs, yargs, validator
const yargs = require('yargs')
var uniqid = require('uniqid'); 

const student = require('./modules/student')
yargs.command({
    command: "getAllStudents",
    handler: function(){
        console.log(student.getAll())
    }
})

yargs.command({
    command:"addStudent",
    builder:{
        id:{
            type:"number",
            default: uniqid()
        },
        name:{
            type:"string",
            demandOption:true
        },
        age:{
            type: "number",
            demandOption:true
        },
        grade:{
            type:"number",
            default:0
        },
        email:{
            type:"string",
            demandOption:true
        } 
    },
    handler:function(argv){
        let st = {
            id: argv.id,
            name: argv.name,
            age:argv.age,
            grade:argv.grade,
            email:argv.email
        }
        student.addStudent(st)
    }
})

yargs.command({
    command:"findStudent",
    builder:{
        id:{
            type:"string",
            demandOption:true
        }
    },
    handler: function(argv){
        student.findStudent(argv.id)
    }
})
yargs.argv















