(function() {

 //Declare module for website application 
 var app = angular.module('app', []);

 //Collapsible Menu
 app.controller('NavBarCtrl', ['$scope', function($scope) {
   $scope.isCollapsed = true;
  }]);
 
//Application page directives
  app.directive('home', function(){
  	return {
  		restrict: 'E',
  		templateUrl: 'templates/home.html'
  	};
  });
  
 app.directive('ourStory', function(){
 	return {
 		restrict: 'E',
      controller: 'StoryController',
 		templateUrl: 'templates/our-story.html'
 	};
 });
 
 app.directive('ourWedding', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/our-wedding.html'
	};
 });
 
  app.directive('hotelsAndTravel', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/hotels-and-travel.html'
	};
 });

 app.directive('thingsToDoInMadison', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/madison.html'
 	};
 });
 
 app.directive('ourRegistries', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/our-registries.html'
 	};
 });
 
 app.directive('photos', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/photos.html'
 	};
 });

 app.directive('smooth', function() {
   return {
      restrict: 'A',
      controller: 'ScrollController'
   };
});


 app.controller('ScrollController', ['$window', '$element', function($window, $element) {
   function setPosition(startTime, endTime, startPos, endPos) {
      var now = Date.now();

      if(now < endTime) {
         var interval   = endTime - startTime,
             timePassed = now     - startTime,
             ratio      = timePassed / interval,
             top        = (0.5 - Math.cos(ratio * Math.PI) / 2) * (endPos - startPos) + startPos; //default jquery easing function

         $window.document.scrollingElement.scrollTop = top;

         $window.requestAnimationFrame(setPosition.bind(null, startTime, endTime, startPos, endPos));

      } else {
         $window.document.scrollingElement.scrollTop = endPos;
      }
   }

   $element.on('click', function() {

      var startTime = Date.now(),
          endTime   = startTime + 1000,
          startPos  = $window.document.scrollingElement.scrollTop,
          toId      = $element.attr('href').substring(1),
          toElement;

      if(toId == "") {
         toElement = document.getElementById("home");
      } else {
         toElement = document.getElementById($element.attr('href').substring(1));
      }

      var endPos = startPos + toElement.getBoundingClientRect().top;
         
      $window.requestAnimationFrame(setPosition.bind(null, startTime, endTime, startPos, endPos));
   });
 }]);

 app.controller('StoryController', ['$window', '$timeout', function($window, $timeout) {
   $timeout(function() { angular.element($window).triggerHandler('resize'); }, 0);
 }]);
 
//Controller manages viewing array of Madison activities
app.controller('ActivityController', function(){
	this.list = madison;
	
});

})();