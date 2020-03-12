'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var util = require('util');

	module.exports = class HttpServer {

		constructor() {
			this._httpServer = http.createServer(function onRequest(req, res) {

				// pipes have no error handling, hence avoid using pipe in production.
				fs.createReadStream(__filename).pipe(res);
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

	};

})();
