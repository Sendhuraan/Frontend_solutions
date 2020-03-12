'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var util = require('util');

	module.exports = class HttpServer {

		constructor() {
			this._httpServer = http.createServer(function onRequest(req, res) {

				const readStream = fs.createReadStream(__filename);
				readStream.pipe(res);

				// It is possible to handle some errors manually like this to prevent memory leaks
				// but it is recommended to use pump in production.
				res.on('close', () => {
					readStream.destroy();
				});
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
