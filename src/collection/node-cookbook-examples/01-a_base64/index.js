'use strict';

(function() {

	console.log('Type Input: ');

	process.stdin.on('data', function(data) {
		process.stderr.write(`Converting "${data}" to base64...\n`);
		process.stdout.write(`${data.toString('base64')} \n`);
	});
	
})();
