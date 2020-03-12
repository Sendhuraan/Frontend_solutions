'use strict';

(function() {

	var readStream = require('readable-stream');

	class MyTransform extends readStream.Transform {

		_transform(chunk, encoding, callback) {
			var processedData = String(chunk).toUpperCase();
			callback(null, processedData);
		}

	}

	var publicAPI = {
		MyTransform
	};

	module.exports = publicAPI;
	
})();
