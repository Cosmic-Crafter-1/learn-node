// This is a class.
const EventEmitter = require('events')

// Instance of EventEmitter class.
const customEmitter = new EventEmitter()

// Listen to events i.e; subscribe to an event.
customEmitter.on('response', (name, age) => {
	console.log(`Hello ${name} you are ${age} years old now !!`)
})

customEmitter.on('response', () => {
	console.log(`Some other logic here...`)
})

// Emit the above event.
// Order matters, emit should be at end.
// First listen --> Then emit.
customEmitter.emit('response', 'Vishnu', 21)