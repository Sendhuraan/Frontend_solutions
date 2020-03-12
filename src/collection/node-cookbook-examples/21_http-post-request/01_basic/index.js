'use strict';

(function() {

	const http = require('http');

	const payload = `{
		"name": "Cian O Maidin",
		"company": "nearForm"
	}`;

	const options = {
		method: 'POST',
		hostname: 'jsonplaceholder.typicode.com',
		port: 80,
		path: '/posts',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(payload)
		}
	};

	const request = http.request(options, function(response) {
		console.log(`\n Status: ${response.statusCode}`);
		process.stdout.write(' Body: ');
		response.pipe(process.stdout);

		response.on('end', function() {
			console.log('\n');
		});
	});

	request.on('error', function(err) {
		console.error(`Error: ${err}`);
	});

	request.end(payload);
	
})();
