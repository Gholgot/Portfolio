//______________ Require ____________

var express = require('express');  
var app = express();  
var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var server = require('http').createServer(app); 
var bodyParser = require('body-parser');
var base64url = require('base64url');

//________________ Global Var ________

var URL = "mongodb://localhost/my_irc";

//________________ Entity _________

//irc.user = require('./app/model/user');
//irc.room = require('./app/model/room');

//________________ Class __________


//________________ App Concern ________

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//__________________ Routes ___________

var routing = express.Router();
require('./app/route')(routing);
app.use('/', routing);  


//________________ Functions ___________

server.listen(8888, '0.0.0.0', function() {
    console.log('Anonymous connected');
}); 


