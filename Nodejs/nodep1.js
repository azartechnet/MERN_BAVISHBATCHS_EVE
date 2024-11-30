var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set Content-Type to text/html
    res.write('<h1>This is Heading</h1>'); // HTML content
    res.end(); // End the response
}).listen(8080);

console.log("Server is Running...");