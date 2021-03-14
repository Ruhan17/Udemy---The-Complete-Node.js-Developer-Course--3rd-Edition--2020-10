// const add = require('./utils.js')
//
// const sum = add(4, -2)
//
// console.log(sum)
const chalk = require('chalk')
const getNotes = require('./notes.js')

console.log(getNotes())

const greenMsg = chalk.green.inverse.bold('Success!')
console.log(greenMsg)