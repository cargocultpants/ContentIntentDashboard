// Load HTTP module
const http = require('http');

//Create HTTP server and listen on port 8000 for requests
// Set the response HTTP header with HTTP status and Content type
// Send the response body "Hello World"
// Print URL for accessing server

http.createServer(
  function(request, response){
    response.writeHead(
      /* HTTP status */,
      { 'Content-Type': /* Content Type */ }
    );
		response.end(/*response body*/);
	}
)
.listen(8000);
console.log(/*URL for accessing server*/);


http
	.createServer(function(request, response) {
		response.writeHead(200, { 'Content-Type': 'text/plain' });
		response.end('Hello World\n');
	})
	.listen(8000);
console.log('Server running at http://localhost:8000/');
