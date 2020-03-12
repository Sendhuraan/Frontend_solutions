(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['**/*.js'],
				options: 'transpileLintOptions'
			},
			test: false,
			bundle: {
				entry: 'index.js',
				output: {
					file: 'index.js'
				}
			}
		},
		browser: false,
		dirs: {
			node: false,
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
