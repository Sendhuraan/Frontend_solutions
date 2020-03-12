'use strict';

(function() {

	var http = require('http');
	var util = require('util');
	var serveStatic = require('serve-static');
	var finalhandler = require('finalhandler');

	var { listUsers, createUser } = require('./routes-handlers');

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

					if(request.url === '/users') {
						listUsers(request, response);
					}
				}
				else if(request.method === 'POST') {
					if(request.url === '/create-user') {
						createUser(request, response);
					}
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
