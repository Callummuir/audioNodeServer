"use strict";angular.module("intervalTimerApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("intervalTimerApp").controller("MainCtrl",["$scope","backEnd",function(a,b){var c,d=new AudioContext,e=null,f=function(){var a=new XMLHttpRequest;a.open("GET","http://127.0.0.1:8080/getAudio",!0),a.responseType="arraybuffer",a.onload=function(){d.decodeAudioData(a.response,function(a){e=a,c=g(e)})},a.send()},g=function(a){var b=d.createBufferSource();return b.buffer=a,b.loop=!1,b.connect(d.destination),b},h=function(){f()};h(),a.playAudio=function(){c.start(0),console.log("playing audio")}}]),angular.module("intervalTimerApp").controller("AboutCtrl",["$scope",function(a){a.test="this is an about page test"}]),angular.module("intervalTimerApp").service("backEnd",function(){this.getAudio=function(){console.log("print")}}),angular.module("intervalTimerApp").run(["$templateCache",function(a){a.put("views/about.html",'<br> <br> <img src="images/intervalTimerLogo.png"> <h1> Interval Timer </h1> <p> This is a basic interval timer that I made to time exercise rounds and rest intervals. </p>'),a.put("views/main.html",'<button ng-click="playAudio()" type="button" class="btn btn-default audioButton">Play Audio</button>')}]);