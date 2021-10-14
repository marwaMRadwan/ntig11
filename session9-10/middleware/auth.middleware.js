const jwt = require("jsonwebtoken")
const User = require("../db/models/user.model")
const auth = async(req, res, next) =>{
    /*
    get authorization from header
    convert token to _id (verify)
    search user (id, token)
    if(!user) throw error
    return user
     */
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        var decoded = jwt.verify(token, process.env.JWTTOKEN);

        res.send(decoded)
    }
    catch(e){ res.status(500).send({apiStatus:false, data: e, message:"unauthorized"})}
    next()
}
module.exports = auth