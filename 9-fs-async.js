
// ** Alternative code to this callback hell are promises and async-await, to be used in future.

// Import file system module.
const { readFile, writeFile } = require('fs')
console.log()

console.log("Code initialization: ")

// Callback function with error and result as parameters.
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err)
		return;
	} else {
		const first = result;
		// If the first read is successful, then read the second file.
		readFile('./content/second.txt', 'utf-8', (err, result) => {
			if (err) {
				console.log(err)
				return;
			} else {
				const second = result
				// Now that both files are read, create a new file with both file's text content in it.
				writeFile('./content/result-async.txt', 
					`Here is the result via async fs module: ${first} ${second}`
				// Callback function again ...
				// Result is undefined, since it's only writing into a new file with nothing to "return".
				,(err, result) => {
					if(err) {
						console.log(err);
						return;
					} else {
						console.log("Done with writing the file.")
					}
				})
			}
		})
	}
})

console.log("Starting next task.")

/*
	Oof, so console logging shows the true power of async.

	When it reaches line 9, readFile, it knows it's an async approach, so it off-loads the task to the c++ API's (described in event loop video) and let's it do it's thing to push it of to task queue.

	Now as soon as it off-loads, then it goes to next task.
	Therefore the reason why console logs are in order of:

	1 --> 3 --> 2


	The callback function is invoked by Node.js after the file reading operation is completed.
	It receives two parameters:
	err: If an error occurs during the file reading operation, this parameter will contain an error object. If there is no error, it will be null.
	result: If the file is read successfully, this parameter will contain the content of the file as a string (due to the 'utf8' encoding specified).
	Automatic Invocation:

	When the readFile function is called, Node.js internally handles the file reading operation.
	Once the operation is completed (either successfully or with an error), Node.js automatically invokes the callback function, passing the appropriate values for err and result.

*/