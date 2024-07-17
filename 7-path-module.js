// Inbuilt path module.
const path = require('path')
console.log()

// Separator.
console.log("Separator method result: ")
console.log(path.sep)
console.log()

// Join the filepaths.
const filePath = path.join('/content/', 'subfolder', 'test.txt')

console.log("Filepath join method result: ")
console.log(filePath)
console.log()

const base = path.basename(filePath)
console.log("Basename: ")
console.log(base)
console.log()

// We would require this absolute path to resolve the file's absolute location on different systems. 
// Say on my system, the dirname is /home/cosmic_crafter/ 
// It'd definitely be different for say a server running linux on it.

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log("Absolute path: ")
console.log(absolutePath)