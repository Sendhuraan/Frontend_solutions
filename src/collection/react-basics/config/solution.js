'use strict';

(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['config/*.js'],
				options: 'defaultLintOptions'
			},
			test: false,
			bundle: false
		},
		browser: {
			lint: {
				pattern: ['**/*.js', '!config'],
				options: 'transpileLintOptions'
			},
			test: {
				runner: 'karma',
				pattern: ['**/*_docs.jsx']
			},
			bundle: false,
			template: false
		},
		dirs: {
			node: false,
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
