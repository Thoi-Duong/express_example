var express = require('express'),
    config = require('./configs/config');
var app = express();

require('./configs/express')(app, config);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.port, function () {
  console.log('Example app listening on http://localhost:'+config.port);
});
