var utils = angular.module("utils", []);
utils.filter('trimText', function(appDefaults){
	return function(data, options){
		var trimLength = options.trimLength || appDefaults.trimLength,
			trailText = options.trailText || appDefaults.trailText;
		return data.length < trimLength ? data : data.substr(0,trimLength) + trailText;
	};
});

utils.value('momentApi', window.moment);

utils.filter('elapsed', function(momentApi){
	return function(value){
		return momentApi(value).fromNow();
	};
});