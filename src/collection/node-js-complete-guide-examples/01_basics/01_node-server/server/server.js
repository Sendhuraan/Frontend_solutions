'use strict';

(function() {

	const { HttpServer } = require('./http-server.js');

	class Server {
		async start(portNumber, contentDir) {

			if(portNumber === undefined) {
				throw new Error('Port number is required');
			}

			this._httpServer = new HttpServer(contentDir);
			await this._httpServer.start(portNumber);

			// bind to random free port
			if (portNumber === 0) {
				const httpServerInstance = await this._httpServer.getNodeServer();
				console.log(`Server at localhost:${httpServerInstance.address().port}`);	
			}
			else {
				console.log(`Server at localhost:${portNumber}`);
			}

		}
	}

	var publicAPI = {
		Server
	};

	module.exports = publicAPI;

}());
