'use strict';

(function() {

	const from = require('from2');

	const readStream = from(function() {

		setTimeout(function() {

			readStream.push('Data 0');

			setTimeout(function() {
				readStream.push('Data 1');
			}, 50);

		}, 100);

	});

	readStream.on('data', function(data) {
		console.log(`${data}`);
	});
		
})();
