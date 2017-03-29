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

//Controller manages viewing array of Madison activities
app.controller('ActivityController', function(){
	this.list = madison;
	
});

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

//Array of Madison activities for everything-madison.html
var madison = [{
	category: 'Food',
	items: [{
		name: 'Old Fashioned',
		description: 'Best cheese curds in Madison',
		link: '#',
		picture: "images.jpg",
		map: '#'
	}, {
		name: 'Great Dane',
		description: 'Terrific Poutine',
		link: '#',
		picture: "images.jpg",
		map: '#'
	}]
}, {
	category: 'Fun',
	items: [{
		name: 'Farmers Market',
		description: 'The main event in Downtown Madison',
		link: '#',
		picture: "images.jpg",
		map: '#'
	}, {
		name: 'Capital tour',
		description: 'Hands down best use of badgers',
		link: '#',
		picture: "images.jpg",
		map: '#'
	}]
}];

})();