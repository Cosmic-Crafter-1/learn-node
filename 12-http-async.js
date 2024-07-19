
const http = require('http')

// Req object gets what's incoming, and res for sending our response out.
const server = http.createServer((req, res) => {
	console.log('request event')
	res.end("This runs second.")
})

// Asynchronous, keeps on waiting with success / error.
server.listen(5000, () => {
	console.log("Server listening on port 5000...")
})

// This extends EventEmitter. 
// So I can use server.on , the "on" method used in file 14.

/*
	1. Create Server:

	When http.createServer is called, Node.js sets up the server but doesn't start listening for requests yet. It just prepares the server to handle incoming requests.

	2. Start Listening:

	server.listen tells Node.js to start listening on the specified port (5000 in this case). At this point, the server is ready to handle incoming requests.

	3. Handle Incoming Requests:

	When a request comes in, the callback function provided to http.createServer is executed. Node.js offloads the request handling to this callback function. This is where the req and res objects come into play.
	The callback logs 'request event' and sends a response with res.end("This runs second.").

	===========================================================================================================================================================

	1. Synchronous Server Creation:

	http.createServer creates the server object right away.
	This step doesn't get offloaded to C++ APIs; it's handled by Node.js synchronously.

	2. Asynchronous Listening for Requests:

	server.listen starts the server and waits for requests.
	Node.js can handle other tasks while it waits, making this step asynchronous.

	3. Asynchronous Request Handling:

	When a request comes in, the callback function (provided in http.createServer) is invoked to handle the request.
	This callback function handles the request asynchronously, allowing Node.js to manage multiple requests efficiently.


	C++ APIs in Node.js:

	While Node.js itself is written in JavaScript, it uses C++ under the hood for performance-critical operations, such as file I/O and networking. The http.createServer function and request handling leverage these C++ APIs to efficiently manage connections and data transfer, but the server creation itself is done synchronously in the JavaScript layer.

	So, to summarize:

	Server creation (http.createServer) is synchronous.
	Listening for requests and handling them is asynchronous.
	Node.js uses C++ APIs for performance but manages the overall flow using its event-driven, non-blocking architecture.

*/