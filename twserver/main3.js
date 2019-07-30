var http = require("http");

var server = http.createServer(function(req, res) {
    escape.writeHead(200, {
        "Content-Type": "text/plain"
        

});
res.write("Hello, World!");
res.end();

});

server.listen(8080,function() {
    console.log("Listening on Port 8080");
});