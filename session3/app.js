// console.log('hello')

//modules

// build in modules
//fs => file system
// const fs = require('fs')
// fs.writeFileSync('test.txt', "hello world")

// my Own modules
// const myModules= require('./myModules/fun')
// console.log(myModules);
// myModules.test()

// npmjs modules
// const validator = require('validator')
// console.log(validator.isEmail('fobar.com'))

// const server = require('./myModules/server')
// server.show()
// console.log(server.chalk.green('show'));

// console.log(process.argv[2])
require('dotenv').config()
console.log(process.env.dbUrl)
