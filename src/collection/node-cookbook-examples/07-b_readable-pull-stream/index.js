'use strict';

(function() {

	const fs = require('fs');

	const readStream = fs.createReadStream(__filename);

	readStream.on('readable', (data) => {
		var fetchData = readStream.read();

		while(fetchData !== null) {
			console.log('chunk');
			console.log('-------');
			console.log(`${fetchData}`);

			fetchData = readStream.read();
		}
	});

	readStream.on('end', () => {
		console.log('================');
		console.log('Data ended');
	});
	
})();
