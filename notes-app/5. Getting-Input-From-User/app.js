// const add = require('./utils.js')
//
// const sum = add(4, -2)
//
// console.log(sum)
const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

if(command === 'add'){
    console.log("Adding note!")
}
else if(command === 'remove'){
    console.log("Removing note!")
}