(function() {

	var solution = {
		node: {
			// remove dir to set source dir.
			dir: 'server',
			test: {
				runner: 'jest',
				pattern: ['**/*_test.js']
			},
			bundle: false,
			server: {
				render: false
			}
		},
		browser: {
			// remove dir to set source dir.
			dir: 'client',
			test: {
				runner: 'jest',
				pattern: ['**/*_test.js']
			},
			bundle: {
				entry: 'index.jsx',
				output: {
					dir: 'dist',
					file: 'bundle.js'
				}
			},
			template: {
				dir: 'templates',
				page: {
					dir: 'pages',
					file: 'index.js',
					data: 'index.data.json'
				}
			}
		},
		dirs: {
			outputDir: 'output',
			developmentDir: 'workstation',
			deployDir: 'deploy'
		}
	};

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
