(function() {

//Declare module for website application 
var app = angular.module('app', []);

//Controller manages pages user views when clicking tabs
app.controller('PageController', function(){

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
});

app.directive('homePage', function(){
	return {
		restrict: 'E',
		templateUrl: 'home-page.html'
	};
});

})();