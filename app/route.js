//_________________ Requires ___________

var express = require('express');
var path = require('path');

//_________________ Routes _____________


module.exports = function(routing) {
    //________ CSS & JS _________
    routing.use("/css", express.static(path.resolve('public/assets/css/')));
    routing.use("/js", express.static(path.resolve('public/assets/js/')));
    routing.use('/img', express.static(path.resolve('public/assets/img/')));
    
    //________ Main _____________
    routing.get("/", function(req, res, next){
        res.sendFile(path.resolve('./public/views/index.html'));
    })

    //________ Entity ___________
  
}


