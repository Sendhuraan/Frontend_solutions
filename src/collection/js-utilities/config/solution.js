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
		browser: {
			lint: {
				pattern: ['**/*.js'],
				options: 'transpileLintOptions'
			},
			test: false,
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
