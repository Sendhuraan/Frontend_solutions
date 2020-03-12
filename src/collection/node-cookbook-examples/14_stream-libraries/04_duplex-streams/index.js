'use strict';

(function() {

	const from = require('from2');
	const to = require('to2');
	const duplexify = require('duplexify');

	const readStream = from(function() {
		readStream.push(Buffer.from('Hello, World!'));
		readStream.push(null);
	});

	const writeStream = to(function(chunk, encoding, callback) {
		console.log(`Data written: ${chunk.toString()}`);
		callback();
	});

	const stream = duplexify(writeStream, readStream);

	stream.pipe(stream);
		
})();
