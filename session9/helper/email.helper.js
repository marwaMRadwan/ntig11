const nodemailer = require("nodemailer")

const smtpConfig = {
    service: 'gmail',
    auth:{
        user:"marwaradwan666@gmail.com",
        pass:"123@Techs"
    }
}

const sendEmailCustom = (reciver, emailTxt, subject) =>{
    try{
        const transporater = nodemailer.createTransport(smtpConfig)
        let emailOptions =             {
            from:"My Application",
            to:reciver,
            subject:subject,
            html:emailTxt
        }
        transporater.sendMail(emailOptions)
    }
    catch(e){
        console.log(e)
    }
}
module.exports = sendEmailCustom