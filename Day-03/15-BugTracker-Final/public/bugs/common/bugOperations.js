angular
	.module("bugTrackerApp.common")
	.factory("bugOperations", function(appDefaults){
		return {
			toggle : function(bug){
				bug.isClosed = !bug.isClosed;
			},
			create : function(id, bugName, desc){
				bugName = bugName || appDefaults.bugName;
				return {
					id : id,
					name : bugName,
					isClosed : false,
					desc : desc,
					createdAt : new Date()
				};
			}
		};
	});