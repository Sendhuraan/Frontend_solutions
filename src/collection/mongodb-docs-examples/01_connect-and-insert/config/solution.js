(function() {

	var solution = {
		node: {
			dir: '<sourceDir>',
			test: false,
			bundle: false,
			server: false,
			db: true
		},
		browser: false,
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
