(function() {

	var config = {
		node: {
			// remove dir to set source dir.
			dir: 'server',
			test: false,
			bundle: {
				entry: 'index.js',
				output: {
					file: 'index.js'
				}
			},
			server: {
				render: true,
				serveDir: 'client',
				development: {
					host: 'localhost',
					port: 3000
				},
				stage: false,
				production: false
			},
			db: false,
			deploy: 'deploy'
		},
		browser: {
			// remove dir to set source dir.
			dir: 'client',
			test: false,
			bundle: {
				entry: 'index.jsx',
				output: {
					dir: 'client',
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
		}
	};

	var publicAPI = {
		config
	};

	module.exports = publicAPI;
	
})();
