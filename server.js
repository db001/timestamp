var http = require('http');
var url = require('url');

var result;

var server = http.createServer(function(req, res) {

  var path = url.parse(req.url.pathname, true);
  
  result = path.pathname;
  
  var d = new Date(result);
  

  /*
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
    res.end(JSON.stringify(urlPath));
  } else {
    res.writeHead(404);
    res.end;
  }
  */
  res.writeHead(200, {'Content-Type': 'application/json'}); 
  res.end(d);
});

server.listen(8080, function () {
  console.log('Server listening on port 8080');
});