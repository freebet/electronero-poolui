'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "etnxpool.com",
		api_url : 'http://128.199.42.21/api',
		api_refresh_interval: 30000,
		app_update_interval: 30*60000
	};
});
