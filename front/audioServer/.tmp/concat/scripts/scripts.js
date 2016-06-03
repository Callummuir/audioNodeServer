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
  .controller('MainCtrl', ["$scope", function ($scope) {
   

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

angular.module('intervalTimerApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<br> <br> <img src=\"images/intervalTimerLogo.png\"> <h1> Interval Timer </h1> <p> This is a basic interval timer that I made to time exercise rounds and rest intervals. </p>"
  );


  $templateCache.put('views/main.html',
    "<div> test </div>"
  );

}]);
