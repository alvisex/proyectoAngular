var http  = require('http');

var server = http.createServer();

function control(req, resp) {
  resp.writeHead(200, {'content-type':'text/plain'});

  resp.write('Hola, que tranza asdfasdf');

  resp.end();
}

server.on('request', control);

server.listen(8080);
