#!/usr/bin/env node

var app = require('../app');
var config = require('../config/config');

app.listen(config.port, function(){
    console.log('start in:' + config.port);
})