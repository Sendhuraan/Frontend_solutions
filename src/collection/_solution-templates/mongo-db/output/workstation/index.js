(async function() {

	var fs = require('fs');
	var path = require('path');
	var util = require('util');

	const MongoClient = require('mongodb').MongoClient;

	const readFile = util.promisify(fs.readFile);

	try {
		const configEnv = './env.json';
		const configPath = path.join(__dirname, configEnv);
		const appConfig = JSON.parse(await readFile(configPath));

		const { connectionURL } = appConfig.db;
		const DB_NAME = appConfig.db.name;

		var client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });

		console.log('Connected to DB successfully');
		console.log(client.db(DB_NAME));
	}
	catch(err) {
		console.error(err);
	}
	finally {
		client.close();
	}

}());

