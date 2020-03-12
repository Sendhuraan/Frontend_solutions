'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');
	const from = require('from2');
	const to = require('to2');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');

	const readStream = fs.createReadStream(inputFile);

	function fromStream(string) {
		return from(function(size, next) {
			if (string.length <= 0) {
				return next(null, null);
			}
			else {
				var chunk = string.slice(0, size);
				string = string.slice(size);

				next(null, chunk);
			}
		});
	}

	const writeStream = to(function(chunk, encoding, callback) {
		console.log(`Data written: ${chunk.toString().toUpperCase()}`);
		callback();
	});

	readStream.on('data', function(data) {
		fromStream(data.toString())
		.pipe(writeStream);
	});
		
})();
