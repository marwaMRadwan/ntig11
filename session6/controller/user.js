const fs = require('fs')
//read from file
readData = () =>{
    let data
    try{
        data = JSON.parse( fs.readFileSync('model/data.json'))
        if(!Array.isArray(data)) throw new Error('data not an array')
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
        fs.writeFileSync('model/data.json', JSON.stringify(allUsers))
    }
    catch(e){
        console.log(`error in write to file ${e}`)
    }
}
class UserController{
    static goAll(req,res){
        res.redirect('/all')
    }
    static showAll(req, res){
        let data = {
            pageTitle: "show all users"
        }
        res.render('all', data)
    }
    static showSingle(req, res){
        let data = {
            pageTitle: "show Single User"
        }
        res.render('single', data)
    }
    static edit(req, res){
        let data = {
            pageTitle: "edit user"
        }
        res.render('edit', data)
    }
    static add(req, res){
        let data = { pageTitle: "Add new user"}
        if(req.query.userName){
            let user = { id: Date.now(), name: req.query.userName, age: req.query.age }
            let allUsers = readData()
            allUsers.push(user)
            writeData(allUsers)
            res.redirect('/add')
       }
       else{
        res.render('add', data)
       }
    }
    static del(req, res){
        res.send('deleted')
    }
}


module.exports = UserController