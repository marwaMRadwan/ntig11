const mongoose = require("mongoose")
const validator=require("validator")
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        minlength:6,
        maxlength:20,
        required:true
    }, 
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    }, 
    password:{
        type:String,
        trim:true,
        //match:,
        required:true,
        minlength:6,
        maxlength:100 
    }, 
    phone:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error("invalid phone number")
        }
    }, 
    gender:{
        type:String,
        trim:true,
        enum:["male", "female"]
    }, 
    image:{
        type:String,
        trim:true
    },
    age:{
        type:Number,
        min:21
    }, 
    hoppies:[
        { 
            name : {type:String, trim:true } 
        }
    ], 
    status:{
        type:Boolean,
        default: false
    }
})

userSchema.pre("save", async function(){
    let user = this
    if(user.isModified("password")) user.password=await bcrypt.hash(user.password, 12)
    // user.updatedAt= Date.now()
})

const User = mongoose.model("User", userSchema)
module.exports = User