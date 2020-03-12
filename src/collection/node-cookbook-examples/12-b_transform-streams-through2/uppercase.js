'use strict';

(function() {

	var through = require('through2');

	function uppercase() {
		return through(function(chunk, encoding, callback) {
			var processedData = String(chunk).toUpperCase();
			callback(null, processedData);
		});
	}

	var publicAPI = {
		uppercase
	};

	module.exports = publicAPI;
	
})();
