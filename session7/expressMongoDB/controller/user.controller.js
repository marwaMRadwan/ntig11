const db = require('../dbConnection/db')
const {ObjectId} = require("mongodb")
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
        let id= new ObjectId(req.params.id)
        db((err, dbCilent)=>{
            if(err) res.send('database error')
            dbCilent.collection('user').findOne({_id:id}, (err, user)=>{
                res.render('user/single', {user})
            })
        })
    }
    static editUser = (req,res)=>{
        let id= new ObjectId(req.params.id)
        db((err, dbCilent)=>{
            if(err) res.send('database error')
            dbCilent.collection('user').findOne({_id:id}, (err, user)=>{
                res.render('user/edit', {user})
            })
        })
    }
    static sendUpdates = (req, res)=>{
        let id= new ObjectId(req.params.id)
        let newData = req.body
        db((err, dbCilent)=>{
            if(err) res.send('database error')
            dbCilent.collection("user").updateOne(
                {_id: id},
                {$set: {userName: newData.userName, age: newData.age}}
            )
            .then(res.redirect('/all'))
            .catch(e=>{ res.send('error in edit')})
        })
    }
    static del = (req,res)=>{
        let id = new ObjectId(req.params.id)
        db((err, dbCilent)=>{
            if(err) res.send('database error')
            dbCilent.collection("user").deleteOne({_id:id})
            .then(()=> res.redirect('/all'))
            .catch(e=>res.send(e))
        })
    }
}
module.exports = User