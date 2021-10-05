const chalk = require('chalk')

show = () =>{
    console.log(chalk.green('show'));
}

print = () => {
    console.log('print')
}

module.exports = {show, print, chalk}