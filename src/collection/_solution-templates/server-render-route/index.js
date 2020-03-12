import fs from 'fs';
import path from 'path';
import Server from './server/server';

(async function() {

	const configEnv = '/development.json';
	const configPath = path.join(__dirname, configEnv);

	const serverConfig = JSON.parse(fs.readFileSync(configPath));

	const PORT = serverConfig.port;
	const SERVE_DIR = serverConfig.serveDir;
	const CONTENT_DIR = path.join(__dirname, SERVE_DIR);

	const server = new Server();

	await server.start(CONTENT_DIR, PORT);
	console.log(`Server Running at localhost:${PORT}`);

})();

