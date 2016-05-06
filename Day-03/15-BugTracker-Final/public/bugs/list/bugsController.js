angular.module("bugTrackerApp.list")
	.controller("bugsController", function($scope, bugService){
		$scope.bugs = [];
		
		var promise = bugService.getAll();
		promise.then(function(bugs){
			$scope.bugs = bugs;
		});

		$scope.toggle = function(bug){
			bugService.toggle(bug);
		};

		$scope.removeClosed = function(){
			for(var i=$scope.bugs.length-1; i>=0 ; i--)
				if ($scope.bugs[i].isClosed){
					bugService.remove($scope.bugs[i]);
					$scope.bugs.splice(i,1);
				}
		};
	});