angular.module("bugTrackerApp.list")
	.filter('toClosedCount', function($filter){
			var builtInFilter = $filter('filter');
			return function(bugs){
				bugs = bugs || [];
				return bugs.reduce(function(result,bug){
					return bug.isClosed ? ++result : result;
				},0)
			};
		});
