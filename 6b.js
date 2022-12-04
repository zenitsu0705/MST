var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html' });
    res.end('<h1>You have connected to the server.</h1>');
}).listen(3000);
console.log("Server started...Running on localhost:3000");