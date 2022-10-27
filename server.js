// server.js
const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");
    response.write("<h1>Makayla Broyles - v66848</h1>" +
        "<p>Running node server on port 3059</p>");
    response.end();
}).listen(3059);