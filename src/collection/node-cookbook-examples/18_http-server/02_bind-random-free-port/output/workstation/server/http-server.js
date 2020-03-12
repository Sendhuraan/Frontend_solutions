'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var util = require('util');

	function users(res) {
		res.end(`
		{
			'data': [
				{
					'id': 1,
					'first_name': 'Bob',
					'last_name': 'Smith'
				}
			]
		}
		`);
	}

	function index(res) {
		res.end(`
		{
			'name': 'my-basic-rest-server',
			'version': '0.0.1'
		}
		`);
	}

	function error(res, code) {
		res.statusCode = code;
		res.end(`
		{
			'error': ${http.STATUS_CODES[code]}
		}
		`);
	}

	class HttpServer {

		constructor() {
			this._httpServer = http.createServer(function onRequest(req, res) {
				
				if(req.method !== 'GET') {
					return error(res, 405);
				}

				if(req.url === '/users') {
					return users(res);
				}

				if(req.url === '/') {
					return index(res);
				}
				else {
					error(res, 404);
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
