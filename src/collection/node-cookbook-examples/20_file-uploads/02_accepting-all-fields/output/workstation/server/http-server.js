/* eslint-disable no-inner-declarations */

'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var path = require('path');
	var util = require('util');

	var pump = require('pump');
	var serveStatic = require('serve-static');
	var finalhandler = require('finalhandler');
	var multipartReadStream = require('multipart-read-stream');

	function handlePost(request, response) {
		
		if(!/multipart\/form-data/.test(request.headers['content-type'])) {
			reject(415, response);
		}
		else {
			console.log('Parsing multipart data');
			var total = 0;

			const parser = multipartReadStream(request.headers, response, processData, function() {
				console.log('Finished parsing');
			});

			parser.on('field', function(field, value) {
				console.log(`${field}: ${value}`);
				response.write(`Processed '${field}' input\n`);
			});
			
			pump(request, parser);


			/******/

			function processData(field, file, name) {
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
			}

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
					handlePost(request, response);
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
