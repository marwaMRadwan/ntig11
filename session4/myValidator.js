const validator = require('validator')
class MyValidator{
    static isEmail = (val) => {
        if(!validator.isEmail(val)) return false
        else return true
    }
    static isId = (val, arr) =>{
        if( val.length!=14 ||  !validator.isNumeric(val)|| !arr.includes(val[0]) ) return false
        else return true
        // if(val[0]!="1" && val[0]!="2" && val[0]!="3") console.log('invalid')
        // if(!val.startsWith("1") && !val.startsWith("2") && !val.startsWith("3")) console.log('invalid')
        // else console.log('valid')
        // console.log(["1","2","3"].includes(val[0]))
    }
    static isName = (val) =>{
        val = val.replace(" ", "")
        if( val.length<3 ||val.length>20 || !validator.isAlpha(val) ) return false
        else return true
    }
    static isValidJob = (val, arr) =>{
        if(  !arr.includes(val) ) return false
        else return true
    } 
    static isUnique = (all, val, attr) =>{
        let index = all.findIndex( ele => ele[attr]==val )
        if(index==-1) return true
        else return false
    }
}
module.exports = MyValidator