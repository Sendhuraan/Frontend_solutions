(function() {
	var solution = {
		browser: {
			test: {
				runner: 'jest',
				pattern: ['**/*_docs.js']
			},
			bundle: false,
			template: false
		},
		dirs: {
			deploy: 'deploy'
		}
	};

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
})();
