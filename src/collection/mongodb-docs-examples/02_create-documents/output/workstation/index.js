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

		const db = client.db(DB_NAME);

		// For inserting one document
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

		// For inserting multiple documents
		await db.collection('inventory').insertMany(
			[
				{
					item: 'journal',
					qty: 25,
					tags: ['blank', 'red'],
					size: {
						h: 14,
						w: 21,
						uom: 'cm'
					}
				},
				{
					item: 'mat',
					qty: 85,
					tags: ['gray'],
					size: {
						h: 27.9,
						w: 35.5,
						uom: 'cm'
					}
				},
				{
					item: 'mousepad',
					qty: 25,
					tags: ['gel', 'blue'],
					size: {
						h: 19,
						w: 22.85,
						uom: 'cm'
					}
				}
			]
		);

		console.log('Inserted documents successfully');
	}
	catch(err) {
		console.error(err);
	}
	finally {
		client.close(function() {
			console.log('Connection to DB closed');
		});
	}

}());

