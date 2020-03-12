/* eslint-disable new-cap */

'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');

	const { Transform } = require('readable-stream');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');
	const outputFile = getFullPath('data/output/uppercase.txt');

	const uppercase = Transform({
		transform: function(chunk, encoding, callback) {
			var processedData = String(chunk).toUpperCase();
			callback(null, processedData);
		}
	});

	fs.createReadStream(inputFile)
	.pipe(uppercase)
	.pipe(fs.createWriteStream(outputFile));
		
})();
