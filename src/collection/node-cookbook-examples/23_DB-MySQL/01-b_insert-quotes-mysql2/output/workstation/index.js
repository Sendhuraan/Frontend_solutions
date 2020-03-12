'use strict';

(async function() {

	var fs = require('fs');
	var path = require('path');
	var util = require('util');

    const mysql = require('mysql2/promise');

	const readFile = util.promisify(fs.readFile);

	const configEnv = './env.json';
	const configPath = path.join(__dirname, configEnv);
	const appConfig = JSON.parse(await readFile(configPath));

	const { connectionURL } = appConfig.db;
	const DB_NAME = appConfig.db.name;

	const { createDB, createTable } = require('./data/setup');
	const { insertQuote } = require('./data/operations');

	try {
		// The extra / is needed. Otherwise, it results in parsing error
		var connection = await mysql.createConnection(`${connectionURL}/`);
		console.log('Connected to DB');

		await createDB(connection, DB_NAME);
		await createTable(connection, DB_NAME, 'quotes');

		const quoteData = {
			quote: 'Proof by analogy is fraud.',
			author: 'Bjarne Stroustrup'
		};

		await insertQuote(connection, DB_NAME, 'quotes', quoteData);

	}
	catch(err) {
		console.error(err);
	}
	finally {
		await connection.end();
		console.log('Connection to DB closed');
	}

}());

