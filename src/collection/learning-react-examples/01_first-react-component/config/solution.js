'use strict';

(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['*.js', 'server/**/*.js', 'data/**/*.js'],
				options: 'defaultLintOptions'
			},
			test: false,
			bundle: false
		},
		browser: {
			lint: {
				pattern: ['client/**/*.js', 'client/**/*.jsx'],
				options: 'transpileLintOptions'
			},
			test: false,
			bundle: {
				entry: 'client/index.jsx',
				output: {
					dir: 'dist',
					file: 'bundle.js'
				}
			},
			template: {
				dir: 'client/templates',
				page: {
					dir: 'pages',
					file: 'index.js',
					data: 'index.data.json'
				}
			}
		},
		dirs: {
			node: ['server'],
			browser: ['client'],
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

