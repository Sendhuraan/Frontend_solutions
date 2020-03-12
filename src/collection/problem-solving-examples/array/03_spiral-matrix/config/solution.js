'use strict';

(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['**/*.js'],
				options: 'defaultLintOptions'
			},
			test: false,
			bundle: false
		},
		browser: false,
		dirs: {
			node: ['solution'],
			browser: false,
			output: false,
			development: false,
			deploy: false
		}
	};

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
