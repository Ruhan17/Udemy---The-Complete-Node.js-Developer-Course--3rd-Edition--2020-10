// const add = require('./utils.js')
//
// const sum = add(4, -2)
//
// console.log(sum)
const validator = require('validator')
const getNotes = require('./notes.js')

console.log(getNotes())
console.log(validator.isURL('https://www.google.com'))