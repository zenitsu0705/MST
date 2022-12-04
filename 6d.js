const http = require("http");
http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("I have created the server!");
    res.end();
}).listen(8080);
console.log("Server started... Running on localhost:8080");