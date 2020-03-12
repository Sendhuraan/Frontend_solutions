(function() {

	const HttpServer = require('./http-server.js');

	module.exports = class Server {

		async start(portNumber) {
			if (!portNumber) throw new Error('port number is required');

			this._httpServer = new HttpServer();
			await this._httpServer.start(portNumber);

		}

	};

}());
