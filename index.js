var express = require('express');
var app = express();

var result = {"path": "", "unix": null, "natural": null};

app.get('/*', function (req, res) {
  var path = req.path;
  
  result.path = path;
  
  if (/^[0-9]*$/.test(path)) {
    result.unix = "True";
  } else {
    result.natural = "True";
  }
  
  res.send(result);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});