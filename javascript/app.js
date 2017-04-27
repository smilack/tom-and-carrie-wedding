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

//Controller manages viewing array of Gallery Photos
app.controller('GalleryController', function($scope){
	$scope.photos = gallery;

	// initial image index
	$scope._Index = 0;

	// if a current image is the same as requested image
	$scope.isActive = function (index) {
		return $scope._Index === index;
	};

	// show prev image
	$scope.showPrev = function () {
		$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
	};

	// show next image
	$scope.showNext = function () {
		$scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
	};

	// show a certain image
	$scope.showPhoto = function (index) {
		$scope._Index = index;
	};
});

})();