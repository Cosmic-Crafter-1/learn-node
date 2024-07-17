
const http = require('http')

// Two parameters: Incoming request and our response.
const server = http.createServer((req, res) => {
	// "/" is the end point like in URL, we write amazon'/'about endpoint slash.
	if (req.url === "/") {
		res.end("Welcome to my home page.")
	} else if (req.url === "/about") {
		res.end("This is the about us page.")
	} else {
		res.end(`
			<h1> OOPS! </h1>
			<p> Error 404 Not found !! </p>
			<a href="/"> Back home </a>
			`)
	}
})

// Which port we'll listen for the user requests.
server.listen(5000)