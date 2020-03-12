(function() {

	var through = require('through2');

	function stripSpaces() {

		return through(function(chunk, encoding, callback) {
			var processedData = String(chunk).replace(/ /g, '');
			callback(null, processedData);
		});
	}

	var publicAPI = {
		stripSpaces
	};

	module.exports = publicAPI;
	
})();
