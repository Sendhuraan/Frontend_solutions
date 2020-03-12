import ExpressServer from './express-server.js';

export default class Server {

	async start(contentDir, portNumber) {
		if (!portNumber) throw new Error('port number is required');

		this._httpServer = new ExpressServer(contentDir);
		await this._httpServer.start(portNumber);

	}

}
