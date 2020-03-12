'use strict';

(function() {

	const from = require('from2');
	const to = require('to2');

	const readStream = from(function() {
		readStream.push(Buffer.from('Hello, World!'));
		readStream.push(null);
	});

	readStream.on('data', (data) => {
		console.log(`${data}`);
	});
	
})();
