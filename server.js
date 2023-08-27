var http = require('http');

const config = require('platformsh-config').config();

console.log('server: ', config.port)
console.log('-----------------')
console.log('server: ', config.environment)

/*http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(1000);*/
