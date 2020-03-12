(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['*.js', 'data/**/*.js'],
				options: 'defaultLintOptions'
			},
			test: false,
			bundle: false
		},
		browser: false,
		dirs: {
			node: ['data'],
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
