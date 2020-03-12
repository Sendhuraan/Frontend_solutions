'use strict';

(function() {

	async function createDB(connection, dbName) {

		const checkDB = await connection.query(`SHOW DATABASES LIKE '${dbName}'`);
		const isDBExists = Boolean(checkDB[0].length);

		if(!isDBExists) {
			await connection.query(`CREATE DATABASE ${dbName}`);
			await connection.query(`USE ${dbName}`);

			console.log('DB Created');
		}
	}

	async function createTable(connection, dbName, tableName) {
		await connection.query(`
			CREATE TABLE ${dbName}.${tableName} ( 
				id INT NOT NULL AUTO_INCREMENT,
				author VARCHAR ( 128 ) NOT NULL,
				quote TEXT NOT NULL, PRIMARY KEY ( id )
			)
		`);
	}

	var publicAPI = {
		createDB,
		createTable
	};

	module.exports = publicAPI;
	
})();
