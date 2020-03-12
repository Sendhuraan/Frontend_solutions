'use strict';

(function() {

	var fs = require('fs');
	var path = require('path');
	var util = require('util');

	var writeFile = util.promisify(fs.writeFile);

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}
	const outputFile = getFullPath('../data/output/message.txt');

	function handlePost(request, response) {
		const body = [];

		request.on('data', function(chunk) {
			body.push(chunk);
		});

		request.on('end', async function() {
			var messageData = Buffer.concat(body).toString();
			var message = messageData.split('=')[1];

			try {
				await writeFile(outputFile, message);
			}
			catch(err) {
				console.error(err);
			}
			finally {
				response.end('Message saved successfully');
			}
		});
	}

	var publicAPI = {
		handlePost
	};

	module.exports = publicAPI;
	
})();
