const bcrypt = require("bcryptjs")

const enPass = async(txt) =>{
    const d = await bcrypt.hash(txt, 8)
    console.log(d)
    const isValid = await bcrypt.compare("1234", d)
    console.log(isValid)
}

enPass("123")