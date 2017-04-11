angular.module('app')
.config(function($routeProvider) {
	$routeProvider.when('/home', {templateUrl: 'templates/home-page.html'})
});