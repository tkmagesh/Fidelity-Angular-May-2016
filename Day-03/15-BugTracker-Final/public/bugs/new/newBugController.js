angular.module("bugTrackerApp.new")
	.controller("newBugController", function($scope, bugService, $location){
		$scope.addNew = function(bugName){
			bugService.add(bugName).then(function(newBug){
				$location.path("/list");
			});
		};
	});