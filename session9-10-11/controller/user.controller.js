const mongoose =require("mongoose")
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
            req.user.hoppies.push(req.body)
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                data: req.user,
                message:"added successfuly"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false, 
                data:e.message, 
                message:"error adding hoppy"
            })
        }
    }   
    static login = async(req,res)=>{
        try{
            const userData = await User.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({apiStatus:true, data:{userData, token}, message:"logged in success"})
        }
        catch(e){
            res.status(500).send({apiStatus: false, data:e.message, message:"invalid login"})
        }
    }
    static profile = async(req,res)=>{
        res.status(200).send({
            apiStatus:true,
            data:req.user,
            message:"user data loaded"
        })
    }
    static logoutAll = async(req, res)=>{
        try{
            req.user.tokens=[]
            await req.user.save()
            res.send({
                apiStatus:true,
                data:"",
                message:"user logged out"
            })
        }
        catch(e){
            res.send(e)
        }
    }
    static logout = async(req, res)=>{
        try{
            req.user.tokens
            req.token
            await req.user.save()
            res.send({
                apiStatus:true,
                data:"",
                message:"user logged out"
            })
        }
        catch(e){
            res.send(e)
        }
    }
    static addImg = async(req, res)=>{
        try{
            if(!req.file) throw new Error ("file not found")
            req.user.image = req.file.path //.replaceAll("\\", "/")    // \\  /
            await req.user.save()
            res.status(200).send({apiStatus:true, data: req.user, message:"profile image updated"})
        }
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error add image" })
        }
    }
    static addImage = async (req, res) => {
        try {
          req.user.image = req.file.path;
          await req.user.save();
          res.status(200).send({
            apiStatus: true,
            data: req.user,
            message: " image added successfuly",
          });
        } catch (e) {
          res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "error adding image",
          });
        }
    };
}

module.exports = UserController