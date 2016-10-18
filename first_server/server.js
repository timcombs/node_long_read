var http = require('http');

// //expanded way to pass a callback to prove async works
// function onRequest(request, response) {
//   console.log("Request received.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log('Server has started.');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);