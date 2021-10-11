const db = require('../dbConnection/db')

class User{
    static addUser = (req,res)=>{
        res.render('user/addPost')
    }
    static addUserData= (req,res)=>{
        db((err, dbCilent)=>{
            if(err) res.send('database error')
            dbCilent.collection('user').insertOne(req.body)
            .then(()=> res.redirect('/all'))
            .catch(()=>res.send('error'))
        })
    }
    static showAll = (req,res)=>{
        db((err, dbCilent)=>{
            if(err) res.send('database error')
            dbCilent.collection('user').find().toArray((e, allUsers)=>{
                if(e) res.send("fe error")
                res.render('user/all', {
                    allUsers, 
                    userStatus: allUsers.length==0?false:true
                })
            })
        })
    }
    static showSingle = (req,res)=>{
        res.render('user/single')
    }


    static editUser = (req,res)=>{
        res.render('user/edit')
    }


    static del = (req,res)=>{
        res.send('deleted')
    }

}
module.exports = User