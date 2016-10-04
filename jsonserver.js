var http = require("http");
var url = require("url");

var portNum = process.argv[2];
var result;

var server = http.createServer(function(req, res) {
    
    if (req.method != "GET") {
        console.log("Not GET request");
    }
    var urlPath = url.parse(req.url, true);
    var time = new Date(urlPath.query.iso);
    if (urlPath.pathname === "/api/unixtime") {
        result = {
            "unixtime": time.getTime()
        };
    } else {
        result = {
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        };
    }
    
    if (result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end;
    }
    
});

server.listen(portNum);