'use strict';

(function() {

	const TcpServer = require('./tcp-server.js');

	module.exports = class Server {

		async start(portNumber) {
			if (!portNumber) throw new Error('port number is required');

			this._tcpServer = new TcpServer();
			await this._tcpServer.start(portNumber);

		}

	};

}());
