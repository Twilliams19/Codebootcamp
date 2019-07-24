var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is a test to all of you coders');
});

server.listen(8080, '127.0.0.1');
console.log('you are on coding all the way'); 