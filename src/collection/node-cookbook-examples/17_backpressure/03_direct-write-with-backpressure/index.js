/* eslint-disable new-cap */

'use strict';

(function() {

	const { Readable, Writable } = require('readable-stream');

	var initialCount = 20;

	var readStream = Readable({
		read: function(size) {
			setImmediate(function() {
				readStream.push(initialCount-- ? Buffer.alloc(size) : null);
			});
		}
	});

	var writeStream = Writable({
		write: function(chunk, encoding, callback) {
			console.log(writeStream._writableState.length);
			setTimeout(callback, 1);
		}
	});

	readStream.on('data', function(data) {
		var writable = writeStream.write(data);

		if(writable === false) {
			readStream.pause();
			writeStream.once('drain', function() {
				readStream.resume();
			});
		}
	});
	
})();
