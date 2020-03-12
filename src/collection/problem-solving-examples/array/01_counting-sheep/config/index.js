(function() {

	var config = {
		node: {
			test: {
				pattern: ['**/*_test.js']
			}
		},
		browser: {
			test: {
				pattern: ['**/*_test.js']
			}
		}
	};

	var publicAPI = {
		config
	};

	module.exports = publicAPI;
	
})();
