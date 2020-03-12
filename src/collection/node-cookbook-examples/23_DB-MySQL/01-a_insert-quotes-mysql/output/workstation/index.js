'use strict';

(async function() {

	var fs = require('fs');
	var path = require('path');
	var util = require('util');

    const mysql = require('mysql');

	const readFile = util.promisify(fs.readFile);

	const configEnv = './env.json';
	const configPath = path.join(__dirname, configEnv);
	const appConfig = JSON.parse(await readFile(configPath));

	const { connectionURL } = appConfig.db;
	const DB_NAME = appConfig.db.name;
	console.log(connectionURL);
	console.log(DB_NAME);

	try {
		var db = mysql.createConnection(`${connectionURL}/`);

		db.query('CREATE DATABASE quotes');
		db.query('USE quotes');

		db.query(`
			CREATE TABLE quotes.quotes ( 
				id INT NOT NULL AUTO_INCREMENT,
				author VARCHAR ( 128 ) NOT NULL,
				quote TEXT NOT NULL, PRIMARY KEY ( id )
			)
		`);

		const ignore = new Set([
			'ER_DB_CREATE_EXISTS',
			'ER_TABLE_EXISTS_ERROR'
		]);

		db.on('error',  (err) => {
			if (ignore.has(err.code)) return;
			throw err;
		});

		db.query(`
			INSERT INTO quotes.quotes (author, quote)
			VALUES ("Bjarne Stroustrup", "Proof by analogy is fraud.");
		`);

	}
	catch(err) {
		console.error(err);
	}
	finally {
		await db.end();
		console.log('Connection to DB closed');
	}

}());

