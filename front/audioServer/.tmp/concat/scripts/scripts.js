'use strict';

/**
 * @ngdoc overview
 * @name intervalTimerApp
 * @description
 * # intervalTimerApp
 *
 * Main module of the application.
 */
angular
  .module('intervalTimerApp', [
    'ngRoute'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name intervalTimerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intervalTimerApp
 */
angular.module('intervalTimerApp')
  .controller('MainCtrl', ["$scope", "backEnd", function ($scope, backEnd) {

  	var sessionAudio = null;

    //audio context
    var context = new AudioContext();

    //source for downloaded audio
    var source;

    //holding buffer for the audio
    var audioBuffer = null;


		var loadAudio = function(){
			var request = new XMLHttpRequest();
			//todo update to the one we will use
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
  		console.log("playing audio");
  	}

  }]);



'use strict';

/**
 * @ngdoc function
 * @name intervalTimerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the intervalTimerApp
 */
angular.module('intervalTimerApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.test = "this is an about page test";
  }]);

'use strict';


angular.module('intervalTimerApp')
  .service('backEnd', function () {
    
    this.getAudio = function(){
      console.log("print");
    };
  });

angular.module('intervalTimerApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<br> <br> <img src=\"images/intervalTimerLogo.png\"> <h1> Interval Timer </h1> <p> This is a basic interval timer that I made to time exercise rounds and rest intervals. </p>"
  );


  $templateCache.put('views/main.html',
    "<button ng-click=\"playAudio()\" type=\"button\" class=\"btn btn-default audioButton\">Play Audio</button>"
  );

}]);
