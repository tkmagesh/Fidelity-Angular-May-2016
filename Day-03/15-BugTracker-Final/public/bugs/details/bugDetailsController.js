angular.module("bugTrackerApp.details")
	.controller("bugDetailsController", function($scope, bugService, $routeParams){
			var bugId = parseInt($routeParams.id);
			bugService.getById(bugId).then(function(bug){
				$scope.bug = bug;
			});
		});