'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "etnxpool.com",
		api_url : 'http://165.227.152.155/api',
		api_refresh_interval: 5000,
		app_update_interval: 30*60000
	};
});
