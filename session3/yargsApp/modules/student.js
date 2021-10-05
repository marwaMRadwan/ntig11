const fs = require('fs')
const validator = require('validator')
// require('../c')
// read all data
const readData = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('data.json'))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data=[]
    }
    return data
}
//write data
const writeData = (allStudents)=>{
    fs.writeFileSync('data.json', JSON.stringify(allStudents))
}

class Student{
    static getAll(){
        return readData()
    }
    static addStudent(studentData){
       // console.log(studentData)
       if(!validator.isEmail(studentData.email)) return console.log('invalid email')
        let all= readData()
        all.push(studentData)
        writeData(all)
    }
}

module.exports = Student