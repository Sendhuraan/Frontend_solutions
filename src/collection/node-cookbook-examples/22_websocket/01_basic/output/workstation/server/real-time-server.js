/* eslint-disable new-cap */

'use strict';

(function() {

	var util = require('util');
	var ws = require('ws');

	function connectAndListenMessages(realTimeServer) {
		realTimeServer.on('connection', function(socket) {
			socket.on('message', function(msg) {
				console.log(`Received: ${msg}`);

				if(msg === 'Hello') {
					socket.send('Websockets!');
				}
			});
		});
	}

	class RealTimeServer {

		constructor(httpServer) {
			this._nodeHttpServer = httpServer.getNodeServer();
		}

		start() {

			this._realTimeServer = new ws.Server({
				server: this._nodeHttpServer
			});

			connectAndListenMessages(this._realTimeServer);
		}

		stop() {
			const close = util.promisify(this._realTimeServer.close.bind(this._realTimeServer));
			return close();
		}
	}

	var publicAPI = {
		RealTimeServer
	};

	module.exports = publicAPI;

})();
