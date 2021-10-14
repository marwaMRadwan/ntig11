const User = require("../db/models/user.model")
const emailSetting = require('../helper/email.helper')
const generateTxt = require("../helper/generateEmailTxt")
class UserController{
    static register = async(req, res)=>{
        try{
            let user = new User(req.body)
            await user.save()
            emailSetting(user.email, generateTxt(), "new registeration" )
            res.send({apiStatus:true, message:"registered", data: user})
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in adding user"
            })
        }
    }
    static activateUser = async(req,res) =>{
        let userId = req.params.id
        try{
            let user = await User.findById(userId)
            if(!user) res.status(404).send({apiStatus:false, message:"user not found", data:""})
            user.status=true
            await user.save()
            res.status(200).send({apiStatus:true, message:"registered", data: user})
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in activate user"
            })
        }
    }
    static addHoppies = async(req, res)=>{
        try{
            const userData = await User.findById(req.params.id)
            if(!userData) res.status(404).send({apiStatus:false, data:"", message:"user not found"})
            userData.hoppies.push(req.body)
            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message:"added successfuly"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"error adding hoppy"})
        }
    }   
    static login = async(req,res)=>{
        try{
            const user = await User.loginUser(req.body.email, req.body.password)
            res.status(200).send({apiStatus:true, data:user, message:"logged in success"})
        }
        catch(e){
            res.status(500).send({apiStatus: false, data:e.message, message:"invalid login"})
        }
    }
}

module.exports = UserController