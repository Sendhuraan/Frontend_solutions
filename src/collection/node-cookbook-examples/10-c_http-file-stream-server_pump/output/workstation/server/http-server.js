(function() {

	var fs = require('fs');
	var http = require('http');
	var util = require('util');

	var pump = require('pump');

	module.exports = class HttpServer {

		constructor() {
			this._httpServer = http.createServer(function onRequest(req, res) {

				const readStream = fs.createReadStream(__filename);

				pump(readStream, res, function(err) {
					if(err) {
						return console.error('There was an error in streaming', err);
					}
					else {
						console.log('File streamed successfully');
					}
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
