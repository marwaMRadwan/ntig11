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
}
module.exports = UserController