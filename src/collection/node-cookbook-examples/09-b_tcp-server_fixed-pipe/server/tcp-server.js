'use strict';

(function() {

	var fs = require('fs');
	var net = require('net');
	var util = require('util');

	module.exports = class TcpServer {

		constructor() {
			this._tcpServer = net.createServer(function onRequest(socket) {

				const content = fs.createReadStream(__filename);
				content.pipe(socket, {
					end: false
				});

				content.on('end', () => {
					socket.end('\n======== Footer ========\n');
				});
				
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

	};

})();
