var http=require('http');
var d=require('./date');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h4 align="center"><b>Date and Time is</b></h4>');
    res.write('<center>'+d.myDateTime()+'</center');
}).listen(3000);
console.log("Server started...Running on localhost:3000");