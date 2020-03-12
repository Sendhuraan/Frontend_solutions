'use strict';

(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['*.js', 'server/**/*.js'],
				options: 'defaultLintOptions'
			},
			test: false,
			bundle: false
		},
		browser: false,
		dirs: {
			node: ['server'],
			browser: false,
			output: 'output',
			development: 'workstation',
			deploy: 'deploy'
		}
	};

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
