'use strict';

(function() {

	var util = require('util');

	var readStream = require('readable-stream');

	function MyTransform(options) {
		readStream.Transform.call(this, options);
	}

	util.inherits(MyTransform, readStream.Transform);

	MyTransform.prototype._transform = function(chunk, encoding, callback) {
		var processedData = String(chunk).toUpperCase();
		callback(null, processedData);
	};

	var publicAPI = {
		MyTransform
	};

	module.exports = publicAPI;
	
})();
