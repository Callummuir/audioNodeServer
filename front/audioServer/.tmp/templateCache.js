angular.module('intervalTimerApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<br> <br> <img src=\"images/intervalTimerLogo.png\"> <h1> Interval Timer </h1> <p> This is a basic interval timer that I made to time exercise rounds and rest intervals. </p>"
  );


  $templateCache.put('views/main.html',
    "<div> test </div>"
  );

}]);
