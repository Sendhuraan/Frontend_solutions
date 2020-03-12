/* eslint-disable new-cap */

'use strict';

(function() {

	const { Readable, Writable } = require('readable-stream');

	const readStream = Readable({
		read: function() {
			setTimeout(function() {

				readStream.push('Data 0');

				setTimeout(function() {
					readStream.push('Data 1');
				}, 50);

			}, 100);
		}
	});

	readStream.on('data', function(data) {
		console.log(`${data}`);
	});
		
})();
