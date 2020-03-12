'use strict';

(function() {
	
	const through = require('through2');
	const split = require('split2');
	const pumpify = require('pumpify');

	function pingProtocol() {

		const pingPattern = /Ping:\s+(.*)/;

		const protocol = through(function(chunk, encoding, callback) {
			if(pingPattern.test(chunk)) {
				callback(null, `Pong: ${chunk.toString().match(pingPattern)[1]}\n`);
				return false;
			}
			else {
				callback(null, 'Not Implemented\n');
			}
		});

		return pumpify(split(), protocol);
	}

	var publicAPI = {
		pingProtocol
	};

	module.exports = publicAPI;


})();
