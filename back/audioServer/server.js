(function(){
  'use strict';

  var express    = require("express"); 
  var ms = require('mediaserver');
  // (https://github.com/obastemur/mediaserver)  

  var audioFilePath = "audio/testAudio.wav";
  var app = express();
      
  // set the static files location /public/img will be /img for users
  app.use(express.static(__dirname + '/public'));                
      
  // listen (start app with node server.js) ======================================
  app.listen(8080, '127.0.0.1');
  console.log("App listening on port 8080");

  // api ---------------------------------------------------------------------
  // get audio api function
  app.get('/getAudio', function(req, res) {
    console.log("getting audio");
    ms.pipe(req, res, audioFilePath);
    return ;
  });
}());
