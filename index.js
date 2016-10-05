var express = require('express');
var moment = require('moment');
var app = express();

var result = {"unix": null, "natural": null};

app.get('/*', function (req, res) {
  var path = req.path.slice(1);
  
  if (/^[0-9]*$/.test(path)) {
    result.unix = path;
    var d = new Date(path * 1000);
    result.natural = moment(d).format("MMMM DD, YYYY");
  } else {
    
  }
  
  res.send(result);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});