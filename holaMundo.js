var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Buen día Node.js\n");
});

server.listen(8000);

console.log("Server corriendo en http://127.0.0.1:8000/");