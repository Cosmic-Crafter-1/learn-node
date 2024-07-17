// Import file system module.
const {readFileSync, writeFileSync} = require('fs')
console.log('Start')

// Read existing files.
// Two params: A path, and the encoding - utf8.
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log("File contents: ")
console.log(first, second)

// Write OR create new files.
// This re-writes the result.txt file into the text content below, every time node is refreshed.
writeFileSync('./content/result-sync.txt', `Here is the result of writing into a new file: ${first}, ${second} \n \n`)

// To append only, use the flag append options.
writeFileSync('./content/result-sync.txt', `Here is the result of appending text using the flag options.`, { flag: 'a' })

console.log('Done with this task.')
console.log("Starting the next one.")

// Here comes the part of sync and async.

// It's going step by step and if both the files are, say a novel, then combining them into a single result's gonna take long time.

// If there were 10 users, 9 of them would be blocked.