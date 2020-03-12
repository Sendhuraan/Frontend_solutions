'use strict';

(function() {

	var http = require('http');
	var path = require('path');
	var util = require('util');

	var express = require('express');
	var bodyParser = require('body-parser');

	var adminRoutes = require('./routes/admin');
	var defaultRoutes = require('./routes');

	class ExpressServer {

		constructor(contentDir) {

			var app = express();

			app.use(bodyParser.urlencoded({
				extended: true
			}));

			app.use(bodyParser.json());

			app.use(express.static(contentDir));

			app.use('/admin', adminRoutes);
			app.use(defaultRoutes);

			app.use(function(request, response) {
				response.status(404).sendFile(path.join(contentDir, '404.html'));
			});

			this._httpServer = http.createServer(app);
			
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

	}

	var publicAPI = {
		ExpressServer
	};

	module.exports = publicAPI;

})();
