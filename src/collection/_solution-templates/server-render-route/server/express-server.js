import http from 'http';
import path from 'path';
import util from 'util';
import express from 'express';

import mainRoutes from './routes/main.routes';

export default class ExpressServer {

	constructor(contentDir) {

		var app = express();

		app.use( express.static( path.join( __dirname, 'client' ) ) );

		app.use('/', mainRoutes);

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

