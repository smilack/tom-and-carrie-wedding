(function() {

 //Declare module for website application 
 var app = angular.module('app', ['ngAnimate', 'ngTouch']);
 
//Application page directives
  app.directive('homePage', function(){
  	return {
  		restrict: 'E',
  		templateUrl: 'templates/home-page.html'
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
 
  app.directive('travelLogistics', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/travel-logistics.html'
	};
 });

 app.directive('whyMadison', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/why-madison.html'
 	};
 });
 
 app.directive('ourRegistries', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/our-registries.html'
 	};
 });
 
 app.directive('galleryPage', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'templates/gallery-page.html'
 	};
 });

 app.controller('ScrollController', function($scope, $location, $anchorScroll) {
 	var i = 1;

 	$scope.items = [{ id: i, name: 'Page'}]
 });

 app.controller('StoryController', ['$window', '$timeout', function($window, $timeout) {
   $timeout(function() { angular.element($window).triggerHandler('resize'); }, 0);
 }]);
 
//Controller manages viewing array of Madison activities
app.controller('ActivityController', function(){
	this.list = madison;
	
});

})();