angular
	.module("bugTrackerApp.details", ["ngRoute", "bugTrackerApp.common"])
	.config(function($routeProvider){
		$routeProvider
		.when("/details/:id", {
			templateUrl : 'bugs/details/templates/bug-details.html',
			controller : 'bugDetailsController'
		});
	});