var express = require('./config/express');
var mongodb = require('./config/mongoose');
var config = require('./config/config');

var db = mongodb();
var app = express();

app.listen(config.port, function(){
    console.log('start in: http://localhost:' + config.port);
})

module.exports = app;