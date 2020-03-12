'use strict';

(function() {

	const http = require('http');

	const options = {
		method: 'POST',
		hostname: 'jsonplaceholder.typicode.com',
		port: 80,
		path: '/posts',
		headers: {
			'Content-Type': 'application/json',
			'Transfer-Encoding': 'chunked'
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

	http.get('http://jsonplaceholder.typicode.com/posts/1', function(response) {
		response.pipe(request);
	});
	
})();
