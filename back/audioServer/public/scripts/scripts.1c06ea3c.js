"use strict";angular.module("intervalTimerApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("intervalTimerApp").controller("MainCtrl",["$scope",function(a){}]),angular.module("intervalTimerApp").controller("AboutCtrl",["$scope",function(a){a.test="this is an about page test"}]),angular.module("intervalTimerApp").run(["$templateCache",function(a){a.put("views/about.html",'<br> <br> <img src="images/intervalTimerLogo.png"> <h1> Interval Timer </h1> <p> This is a basic interval timer that I made to time exercise rounds and rest intervals. </p>'),a.put("views/main.html","<div> test </div>")}]);