// Built in modules.
const os = require('os')

// Info about current user.
const user = os.userInfo()

// Method returns system uptime in seconds.
const systemUptime = os.uptime()

console.log(user)
console.log(`System uptime: ${(systemUptime / 3600).toFixed(2)} hours`)

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freemem: os.freemem()
}

console.log("OS Info: ")
console.log(currentOS)

//console.log(`User Info: ${JSON.stringify(user)}`)

// when you try to include an object within a string (using template literals), JavaScript converts the object to a string. By default, this conversion results in the string [object Object].

