(async function() {

	var fs = require('fs');
	var path = require('path');
	var util = require('util');

	const MongoClient = require('mongodb').MongoClient;

	const readFile = util.promisify(fs.readFile);

	const configEnv = './env.json';
	const configPath = path.join(__dirname, configEnv);
	const appConfig = JSON.parse(await readFile(configPath));

	const { connectionURL } = appConfig.db;
	const DB_NAME = appConfig.db.name;

	try {
		var client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });

		console.log('Connected to DB successfully');

		const db = client.db(DB_NAME);

		await db.collection('inventory').insertOne({
			item: 'canvas',
			qty: 100,
			tags: ['cotton'],
			size: {
				h: 28,
				w: 35.5,
				uom: 'cm'
			}
		});

		console.log('Inserted one document successfully');
	}
	catch(err) {
		console.error(err);
	}
	finally {
		await client.close();
		console.log('Connection to DB closed');
	}

}());

