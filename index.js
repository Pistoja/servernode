//semplice web server
// modulo http

const http = require('http');

// comportamento web server con callback

const server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Ciao mondo!');
res.end();
})
//in ascolto
// server listen
server.listen(8081, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8081/');