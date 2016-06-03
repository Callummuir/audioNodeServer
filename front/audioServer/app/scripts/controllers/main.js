'use strict';

/**
 * @ngdoc function
 * @name intervalTimerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intervalTimerApp
 */
angular.module('intervalTimerApp')
  .controller('MainCtrl', function ($scope, backEnd) {

  	var sessionAudio = null;

    //audio context
    var context = new AudioContext();

    //source for downloaded audio
    var source;

    //holding buffer for the audio
    var audioBuffer = null;

    //load the remote audio
		var loadAudio = function(){
			var request = new XMLHttpRequest();
			request.open("GET", 'http://127.0.0.1:8080/getAudio');
			request.responseType = 'arraybuffer';
			request.onload = function(){
				context.decodeAudioData(request.response, function(buffer){
					audioBuffer = buffer;
					source = createSource(audioBuffer);
				});
			};
			request.send();  
		};

		//create a source to play the audio
		var createSource = function(buffer){
			var source = context.createBufferSource();
			source.buffer = buffer;
			source.loop = false;
			source.connect(context.destination);
			return source;
		};

    var initilise = function(){
    	loadAudio();
    }
    initilise();

  	$scope.playAudio = function(){
  		source.start(0);
  	}

  });


