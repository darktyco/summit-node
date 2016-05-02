'use strict';

let http = require('http');

let requestHandler = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Word up AS Summit?');
};

let server = http.createServer(requestHandler);

server.listen(8080);

console.log('Server running...');
