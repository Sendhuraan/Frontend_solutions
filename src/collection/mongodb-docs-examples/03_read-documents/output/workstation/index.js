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

	const sampleData = require('./data/store').data;
	const { insertData } = require('./data/operations');
	const { isDBEmpty } = require('./data/utilities');

	try {
		var client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
		console.log('Connected to DB successfully');

		const db = client.db(DB_NAME);

		const isEmpty = await isDBEmpty(db, 'inventory');

		if(isEmpty) {
			await insertData(db, 'inventory', sampleData);
		}

		console.log('');
		console.log('All results');
		console.log('-------------');

		var results_findAll = await db.collection('inventory').find({}).toArray();
		console.log(results_findAll);


		console.log('');
		console.log('Conditional results');
		console.log('---------------------');

		var results_condition = await db.collection('inventory').find({
			status: 'D'
		})
		.toArray();
		console.log(results_condition);


		console.log('');
		console.log('Query operators');
		console.log('---------------------');

		var results_query_operators = await db.collection('inventory').find({
			status: { $in: ['A', 'D'] }
		})
		.toArray();
		console.log(results_query_operators);
		
	}
	catch(err) {
		console.error(err);
	}
	finally {
		await client.close();
		console.log('Connection to DB closed');
	}

}());

