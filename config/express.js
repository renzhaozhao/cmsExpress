var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(){
    console.log('init express....')
    var app = express();

    app.use(bodyParser.json());
    app.use(express.static('./public'))

    require('../mvc/routes/route.news')(app);

    app.use(function(req,res,next){
        res.status(404);
        try{
            return res.json('Not Found');
        }
        catch(e){
            console.error('404 set header after sent');
        }
    })

    app.use(function(err,req,res,next){
        if(!err){
            return next();
        };
        try{
            return res.json(err.message || 'server error');
        }
        catch(e){
            console.error('500 set header after sent');
        }
        res.status(500);

    })

    return app;
}