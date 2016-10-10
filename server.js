var express = require('express');
var moment = require('moment');
var app = express();

var port = process.env.PORT || 3000;

var result = {
    "unix": null,
    "natural": null
};

app.use('/', express.static(__dirname + '/public'));

app.get('/:dateString', function(req, res) {
    var path = req.params.dateString;

    var d = new Date(path);

    if (/^[0-9]*$/.test(path)) {
        result.unix = path;
        d = new Date(path * 1000);
        result.natural = moment(d).format("MMMM DD, YYYY");
    } else if (moment(d).format("MMMM DD, YYYY") === "Invalid date") {
        result = {
            "unix": null,
            "natural": null
        };
    } else {
        d = new Date(path);
        result.natural = moment(d).format("MMMM DD, YYYY");
        result.unix = d.getTime() / 1000;
    }

    res.send(result);
});

app.listen(port, function() {
    console.log('Example app listening on port' + port);
});
