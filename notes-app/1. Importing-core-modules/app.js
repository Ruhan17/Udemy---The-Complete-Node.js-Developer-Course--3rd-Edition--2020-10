const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Ruhan. ')
fs.appendFileSync('notes.txt', 'I study at BUET.')