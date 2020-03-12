'use strict';

(function() {

	const fs = require('fs');

	// /dev/urandom is an infinite file, that contains random data.
	// This example can be used only in Unix like systems (Mac & Linux).
	const readStream = fs.createReadStream('/dev/urandom');

	var size = 0;

	readStream.on('data', (data) => {
		size = size + data.length;
		console.log(`File size : ${size}`);
	});
	
})();
