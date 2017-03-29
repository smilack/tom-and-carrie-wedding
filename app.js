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

//Controller manages viewing array of Madison activities
app.controller('ActivityController', function(){
	this.list = madison;
	
});

//Array of Madison activities for everything-madison.html
var madison = [{
	category: 'Must',
	items: [{
		name: 'Dane County Farmers Market',
		description: 'Saturday 6 am - 1 pm, The capitol square is filled with local farmers selling delicious food. Look for cheese samples - there are dozens of award-winning cheeses! Make it a lunch and hit the food trucks too.',
		link: 'http://dcfm.org/',
		picture: "images.jpg",
		embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.4140553277684!2d-89.38371064859315!3d43.074789679043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880656a97df881e5%3A0x503974506f6ebae4!2sWisconsin+State+Capitol%2C+East+Main+Street%2C+Madison%2C+WI!5e0!3m2!1sen!2sus!4v1490820570312" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
		map: 'https://www.google.com/maps/place/Wisconsin+State+Capitol/@43.0747126,-89.3865672,17z/data=!3m1!4b1!4m5!3m4!1s0x880656a97df881e5:0x503974506f6ebae4!8m2!3d43.0747126!4d-89.3843732'
	}, {
		name: 'Old Fashioned',
		description: 'Often cited as the best fried cheese curds in Madison, the Old Fashioned is a one stop place to find all the local treasures.',
		link: 'http://www.theoldfashioned.com/',
		picture: "images.jpg",
		embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.342047179692!2d-89.38583324859306!3d43.07630377904306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88065340a82a181f%3A0x18a416d89380b324!2sThe+Old+Fashioned!5e0!3m2!1sen!2sus!4v1490820449027" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
		map: 'https://www.google.com/maps/place/The+Old+Fashioned/@43.0763038,-89.3858332,17z/data=!3m1!4b1!4m5!3m4!1s0x88065340a82a181f:0x18a416d89380b324!8m2!3d43.0763038!4d-89.3836392'
	}, {
		name: 'Wisconsin State Capitol',
		description: 'The beautiful building sits right on the square, overlooking both lakes. Visitors can go to a lookout to see the lakes and cities. Hands down, best use of badger statues.',
		link: 'http://tours.wisconsin.gov/',
		picture: "images.jpg",
		embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.4140553277684!2d-89.38371064859315!3d43.074789679043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880656a97df881e5%3A0x503974506f6ebae4!2sWisconsin+State+Capitol%2C+East+Main+Street%2C+Madison%2C+WI!5e0!3m2!1sen!2sus!4v1490820570312" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
		map: 'https://www.google.com/maps/place/Wisconsin+State+Capitol/@43.0747126,-89.3865672,17z/data=!3m1!4b1!4m5!3m4!1s0x880656a97df881e5:0x503974506f6ebae4!8m2!3d43.0747126!4d-89.3843732'
	}]
}, {
	category: 'Food',
	items: [{
		name: 'Tipsy Cow',
		description: 'The best burger in Madison - not to mention their Bulgogi fries. Also boasts one of the largest local tap lists.',
		link: 'http://www.tipsycowmadison.com/',
		picture: "images.jpg",
		embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.4140553277684!2d-89.38371064859315!3d43.074789679043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806533fa1794d05%3A0x8ed80142620cbd69!2sTipsy+Cow!5e0!3m2!1sen!2sus!4v1490820553969" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
		map: 'https://www.google.com/maps/place/Tipsy+Cow/@43.0747897,-89.3837106,17z/data=!3m1!4b1!4m5!3m4!1s0x8806533fa1794d05:0x8ed80142620cbd69!8m2!3d43.0747897!4d-89.3815166'
	}]
}, {
	category: 'Drinks',
	items: [{
		name: 'Hop Cat',
		description: 'Hopcat boasts 200 taps, and includes many of the Midwest favorites. Look for Surly, New Glarus, and Central Waters in particular. Their crack fries were voted best in the nation.',
		link: 'https://hopcat.com/madison',
		picture: "images.jpg",
		embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.404529500414!2d-89.39384404859314!3d43.074989979043025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88065336368fdd39%3A0xe512fb6de3e4776b!2sHopCat!5e0!3m2!1sen!2sus!4v1490820502151" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
		map: 'https://www.google.com/maps/place/HopCat/@43.07499,-89.393844,17z/data=!3m1!4b1!4m5!3m4!1s0x88065336368fdd39:0xe512fb6de3e4776b!8m2!3d43.07499!4d-89.39165'
	}, {
		name: 'The Robin Room',
		description: 'Hands down best use of badgers',
		link: 'http://www.robinroombar.com/',
		picture: "images.jpg",
		embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.404529500414!2d-89.39384404859314!3d43.074989979043025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88065368ff37b581%3A0xe22809618b8009f8!2sThe+Robin+Room!5e0!3m2!1sen!2sus!4v1490820517403" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
		map: 'https://www.google.com/maps/place/The+Robin+Room/@43.07499,-89.393844,17z/data=!4m5!3m4!1s0x88065368ff37b581:0xe22809618b8009f8!8m2!3d43.0836191!4d-89.3771361'
}]}];

})();