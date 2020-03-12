'use strict';

(function() {

	var fs = require('fs');
	var net = require('net');
	var util = require('util');

	var pump = require('pump');
	var { pingProtocol } = require('./ping-protocol-stream');

	function close(err) {
		if(err) {
			console.error('Connection closed with error', err);
		}
		else {
			console.log('Connection closed');
		}
	}

	class TcpServer {

		constructor() {
			this._tcpServer = net.createServer(function onRequest(socket) {
				const protocol = pingProtocol();
				pump(socket, protocol, socket, close);
			});
		}

		start(portNumber) {
			const listen = util.promisify(this._tcpServer.listen.bind(this._tcpServer));
			return listen(portNumber);
		}

		stop() {
			const close = util.promisify(this._tcpServer.close.bind(this._tcpServer));
			return close();
		}

		getNodeServer() {
			return this._tcpServer;
		}

	}

	var publicAPI = {
		TcpServer
	};

	module.exports = publicAPI;

})();
