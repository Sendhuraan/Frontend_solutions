'use strict';

(function() {

	const { HttpServer } = require('./http-server.js');

	class Server {
		async start(portNumber) {
			if (!portNumber) throw new Error('port number is required');

			this._httpServer = new HttpServer();
			await this._httpServer.start(portNumber);
		}
	}

	var publicAPI = {
		Server
	};

	module.exports = publicAPI;

}());
