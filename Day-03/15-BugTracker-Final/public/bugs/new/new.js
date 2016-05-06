angular
	.module("bugTrackerApp.new", ["ngRoute", "bugTrackerApp.common"])
	.config(function($routeProvider){
		$routeProvider
		.when("/new", {
				//template : '<h3>Bugs List</h3>'
				templateUrl : 'bugs/new/templates/bugs-new.html',
				controller : 'newBugController'
			})
	})