/* eslint-disable new-cap */

'use strict';

(function() {

	const { Readable, Writable } = require('readable-stream');

	const readStream = Readable({
		read: function() {
			readStream.push(Buffer.from('Hello, World!'));
			readStream.push(null);
		}
	});

	const writeStream = Writable({
		write: function(chunk, encoding, callback) {
			console.log(`Data written: ${chunk.toString()}`);
			callback();
		}
	});

	readStream.pipe(writeStream);
		
})();
