'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var util = require('util');
	var querystring = require('querystring');
	var serveStatic = require('serve-static');
	var finalhandler = require('finalhandler');
	var jsonParse = require('fast-json-parse');

	const maxData = 2 * 1024 * 1024;

	function handlePost(request, response, maxDataSize) {
		const contentSize = parseInt(request.headers['content-length'], 10);
		
		if(request.headers['content-type'] !== 'application/json') {
			reject(415, response);
		}

		if(isNaN(contentSize)) {
			reject(400, response);
		}

		if(contentSize > maxDataSize) {
			reject(413, response);
		}

		else {
			const buffer = Buffer.allocUnsafe(contentSize);
			var position = 0;

			request.on('data', function(chunk) {
				const offset = position + chunk.length;

				if(offset > contentSize) {
					reject(413, response);
				}
				else {
					chunk.copy(buffer, position);
					position = offset;
				}

			});

			request.on('end', function() {
				if(position !== contentSize) {
					reject(400, response);
				}
				else {
					const data = jsonParse(buffer.toString());

					if(data.err) {
						reject(400, response);
					}
					else {
						console.log(`User posted : ${JSON.stringify(data)}`);
						response.end(`
						{
							"message": "Post received",
							"data": ${JSON.stringify(data, null, 4)}
						}
						`);	
					}
				}
			});
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
