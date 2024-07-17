
// Node uses CommonJS, every file is a module (by default).

// Modules = Encapsulated code (only shares minimum)

// Module imports.
const names = require('./4-names')
const sayHi = require('./5-utils')

console.log(names)

sayHi(names.vishnu)
 