'use strict';

(function() {

	const https = require('https');

	const payload = `{
		"name": "Cian O Maidin",
		"company": "nearForm"
	}`;

	const options = {
		method: 'POST',
		hostname: 'reqres.in',
		port: 443,
		path: '/api/users',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(payload)
		},
		// Adding these for bypass local certificate issues.
		rejectUnauthorized: false,
		requestCert: false,
		agent: false
	};

	const request = https.request(options, function(response) {
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
