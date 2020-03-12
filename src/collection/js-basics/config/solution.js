'use strict';

(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['**/*.js', '!documentation'],
				options: 'defaultLintOptions'
			},
			test: {
				runner: 'mocha',
				// reporter: 'mochawesome',
				pattern: ['**/*_docs.js']
			},
			bundle: false
		},
		browser: {
			lint: {
				pattern: ['**/*.js', '!documentation'],
				options: 'defaultLintOptions'
			},
			test: {
				runner: 'jest',
				pattern: ['**/*_docs.js']
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
