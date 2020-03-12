(async function() {

	var fs = require('fs');
	var path = require('path');
	var util = require('util');

	const readFile = util.promisify(fs.readFile);
	const Server = require('./server/server.js');

	try {
		const configEnv = '/env.json';
		const configPath = path.join(__dirname, configEnv);

		const appConfig = JSON.parse(await readFile(configPath));

		const PORT = appConfig.server.port;

		const server = new Server();

		await server.start(PORT);
		console.log(`Server at localhost:${PORT}`);
	}
	catch(err) {
		console.error(err);
	}	

}());
