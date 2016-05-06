angular
	.module("bugTrackerApp.common")
	.factory("bugService", function(bugOperations, $http){
		function getAllBugs(){
			return $http
					.get('http://localhost:3000/bugs')
					.then(function(response){
						return response.data;
					});
		}
		function addBug(bug){
			var newBug = bugOperations.create(0, bug.name, bug.desc);
			return $http
				.post('http://localhost:3000/bugs', newBug)
				.then(function(response){
					return response.data;
				});
		}
		function toggleBug(bug){
			bugOperations.toggle(bug);
			return $http
				.put('http://localhost:3000/bugs/' + bug.id, bug)
				.then(function(response){
					return response.data;
				});	
		}
		
		function removeBug(bug){
			return $http
				.delete('http://localhost:3000/bugs/' + bug.id, bug)
				.then(function(response){
					return response.data;
				});	
		}
		function getBugById(id){
			return $http
				.get('http://localhost:3000/bugs/' + id)
				.then(function(response){
					return response.data;
				});
		}
		return{
			getAll : getAllBugs, 
			getById : getBugById,
			toggle : toggleBug,
			add : addBug,
			remove : removeBug
		}
	});