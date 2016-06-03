(function(){
  'use strict';

  var express    = require("express");
  // (https://github.com/felixge/node-mysql)

  var app = express();
      
  // set the static files location /public/img will be /img for users
  app.use(express.static(__dirname + '/public'));                
      
  // listen (start app with node server.js) ======================================
  app.listen(8080, '127.0.0.1');
  console.log("App listening on port 8080");

  // api ---------------------------------------------------------------------
  // Test api function
  app.get('/test', function(req, res) {
    res.send("Test API"); 
    console.log("test API");
  });
}());
