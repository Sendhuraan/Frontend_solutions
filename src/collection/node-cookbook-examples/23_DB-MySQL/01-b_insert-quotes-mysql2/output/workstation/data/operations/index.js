'use strict';

(function() {
	
	async function insertQuote(connection, dbName, tableName, data) {
		await connection.query(`
			INSERT INTO ${dbName}.${tableName} (author, quote)
			VALUES ('${data.author}', '${data.quote}');
		`);

		console.log('Quote inserted successfully');
	}

	var publicAPI = {
		insertQuote
	};

	module.exports = publicAPI;

})();
