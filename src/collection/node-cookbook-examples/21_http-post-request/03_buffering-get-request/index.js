'use strict';

(function() {

	const http = require('http');
	const assert = require('assert');
	const url = 'http://www.davidmarkclements.com/ncb3/some.json';

	http.get(url, function(response) {
		const size = parseInt(response.headers['content-length'], 10);
		const buffer = Buffer.allocUnsafe(size);

		var index = 0;

		response.on('data', function(chunk) {
			chunk.copy(buffer, index);
			index += chunk.length;
		});

		response.on('end', function() {
			assert.equal(size, buffer.length);
			console.log(`GUID: ${JSON.parse(buffer).guid}`);
		});
	});
	
})();
