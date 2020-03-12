'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var path = require('path');
	var util = require('util');

	var pump = require('pump');
	var querystring = require('querystring');
	var serveStatic = require('serve-static');
	var finalhandler = require('finalhandler');
	var multiReadStream = require('multipart-read-stream');

	const maxData = 2 * 1024 * 1024;

	function processData(field, file, name) {
		if(!name) {
			file.resume();
			return false;
		}
		else {

		}
	}

	function handlePost(request, response, maxDataSize) {
		
		if(!/multipart\/form-data/.test(request.headers['content-type'])) {
			reject(415, response);
		}
		else {
			console.log('Parsing multipart data');
			var total = 0;

			const parser = multiReadStream(request.headers, function processData(field, file, name) {
				if(!name) {
					file.resume();
					return false;
				}
				else {
					total = total + 1;
					const filename = `${field}-${Date.now()}-${name}`;
					const destination = fs.createWriteStream(path.join(__dirname, 'uploads', filename));

					pump(file, destination, function(err) {
						total = total - 1;

						console.log(err);

						response.write(
							err
							? `Error saving ${name}!\n`
							: `${name} successfully saved!\n`
						);

						if(total === 0) {
							response.end('All files processed!');
						}
					});
				}
			});
			
			pump(request, parser);
		}

	}

	function reject(code, response) {
		response.statusCode = code;
		response.end(`ERROR ${http.STATUS_CODES[code]}`);
	}

	class HttpServer {

		constructor(contentDir) {

			var serve = serveStatic(contentDir, {'index': ['index.html', 'index.htm']});

			this._httpServer = http.createServer(function onRequest(request, response) {
				
				if(request.method === 'GET') {
					serve(request, response, finalhandler(request, response));
				}
				else if(request.method === 'POST') {
					handlePost(request, response, maxData);
				}
				else {
					reject(405, response);
				}
				
			});
		}

		start(portNumber) {
			const listen = util.promisify(this._httpServer.listen.bind(this._httpServer));
			return listen(portNumber);
		}

		stop() {
			const close = util.promisify(this._httpServer.close.bind(this._httpServer));
			return close();
		}

		getNodeServer() {
			return this._httpServer;
		}

	}

	var publicAPI = {
		HttpServer
	};

	module.exports = publicAPI;

})();
