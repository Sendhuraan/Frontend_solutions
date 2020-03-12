'use strict';

(function() {

	const fs = require('fs');

	const readStream = fs.createReadStream(__filename);

	readStream.on('data', (data) => {
		console.log('chunk');
		console.log('-------');
		console.log(`${data}`);
	});

	readStream.on('end', () => {
		console.log('================');
		console.log('Data ended');
	});
	
})();
