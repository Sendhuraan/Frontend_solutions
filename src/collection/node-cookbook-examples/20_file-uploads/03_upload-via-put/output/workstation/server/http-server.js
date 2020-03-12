/* eslint-disable no-inner-declarations */

'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var path = require('path');
	var util = require('util');

	var pump = require('pump');
	var through = require('through2');
	var serveStatic = require('serve-static');
	var finalhandler = require('finalhandler');

	const maxFileSize = 51200;

	function handlePut(request, response) {
		
		const size = parseInt(request.headers['content-length'], 10);

		if(isNaN(size)) {
			reject(400, response);
			return false;
		}

		if(size > maxFileSize) {
			reject(413, response);
			return false;
		}
		else {
			const name = request.headers['x-filename'];
			const field = request.headers['x-field'];
			const filename = `${field}-${Date.now()}-${name}`;
			const destination = fs.createWriteStream(path.join(__dirname, 'uploads', filename));

			const counter = through(function(chunk, encoding, callback) {
				this.bytes += chunk.length;

				if(this.bytes > maxFileSize) {
					callback(Error('size'));
					return false;
				}
				else {
					callback(null, chunk);
				}
			});

			counter.bytes = 0;

			counter.on('error', function(err) {
				if(err.message === 'size') {
					reject(413, response);
				}
			});

			pump(request, counter, destination, function(err) {
				if(err) {
					return reject(500, response);
				}
				else {
					response.end(`${name} successfully saved!\n`);
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
				else if(request.method === 'PUT') {
					handlePut(request, response);
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
