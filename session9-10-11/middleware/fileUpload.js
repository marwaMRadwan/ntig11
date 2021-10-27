const multer = require('multer')
const fs= require('fs')
const path = require('path')
// const upload = multer({

// })
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        let loc
        if(req.user) loc = path.join("public/uploads", req.user._id.toString()) 
        else loc = path.join("uploads", "images") 
        fs.mkdir(loc, (err)=>{})
        cb(null, loc)
    },
    filename: function(req, file, cb){
        const myFileName = Date.now()+path.extname(file.originalname)
        cb(null,myFileName)
    }
})
const upload = multer({
    storage,
    limits:{fileSize:200000000},
    fileFilter: function(req, file, cb){
        if(path.extname(file.originalname)!=".png") 
            return cb(new Error("invalid image"))
        cb(null, true)
    }
})
module.exports = upload