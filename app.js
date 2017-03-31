(function() {

//Declare module for website application 
var app = angular.module('app', []);

//Controller manages pages user views when clicking tabs
app.controller('PageController', ['$scope', '$window', '$timeout', function($scope, $window, $timeout){

	//Sets a default page (home)
	this.page = 1;

	//Identifies page matching anchor tag
	this.isSet = function(checkPage) {
		return this.page === checkPage;
	};

	//Changes page to match page defined for anchor tag
	this.setPage = function(setPage) {
		this.page = setPage;
	};

   $scope.$watch('this.page', function(newVal, oldVal) {
      if(newVal.page == 2) {
         $timeout(function() { angular.element($window).triggerHandler('resize'); }, 0);
      }
   }, true);
}]);


//Application page directives
app.directive('homePage', function(){
	return {
		restrict: 'E',
		templateUrl: 'home-page.html'
	};
});

app.directive('ourStory', function(){
	return {
		restrict: 'E',
		templateUrl: 'our-story.html'
	};
});

app.directive('ourWedding', function(){
	return {
		restrict: 'E',
		templateUrl: 'our-wedding.html'
	};
});

app.directive('everythingMadison', function(){
	return {
		restrict: 'E',
		templateUrl: 'everything-madison.html'
	};
});

app.directive('ourRegistries', function(){
	return {
		restrict: 'E',
		templateUrl: 'our-registries.html'
	};
});

app.directive('galleryPage', function(){
	return {
		restrict: 'E',
		templateUrl: 'gallery-page.html'
	};
});

})();
