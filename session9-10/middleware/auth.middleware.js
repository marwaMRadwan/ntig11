const jwt = require("jsonwebtoken")
const User = require("../db/models/user.model")
const auth = async(req, res, next) =>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWTTOKEN);
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if(!user) throw new Error('unauthorized')
        req.user = user
        req.token=token
        // res.send(req.user)
        next()
    }
    catch(e){ res.status(500).send({apiStatus:false, data: e, message:"unauthorized"})}
    next()
}
module.exports = auth