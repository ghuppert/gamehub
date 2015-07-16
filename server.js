// var express = require('express');
// var app = express();
// 
// app.get('/', function (req, res) {
//   res.send('Hello Game Hub!');
// });
// 
// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
// 
//   console.log('Example app listening at http://%s:%s', host, port);
// });

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.send("Hello World of future game hub users and bannanaws \n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");