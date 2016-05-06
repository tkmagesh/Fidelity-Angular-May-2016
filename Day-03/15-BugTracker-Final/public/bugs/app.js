angular.module("bugTrackerApp", [
	"ngRoute", 
	"utils",
	"bugTrackerApp.common",
	"bugTrackerApp.list", 
	"bugTrackerApp.new",
	"bugTrackerApp.details"
])
.config(function($routeProvider){
	$routeProvider
		.otherwise({
			redirectTo : "/list"
		});
});
