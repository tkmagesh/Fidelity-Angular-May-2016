angular
	.module("bugTrackerApp.list", ["ngRoute", "bugTrackerApp.common"])
	.config(function($routeProvider){
		console.log('list configured');
		$routeProvider
		.when("/list", {
				//template : '<h3>Bugs List</h3>'
				templateUrl : 'bugs/list/templates/bugs-list.html',
				controller : 'bugsController'
			})
	})