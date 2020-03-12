(function() {
	
	async function insertData(db, collection, data) {
		await db.collection(collection).insertMany(data);
	}

	var publicAPI = {
		insertData
	};

	module.exports = publicAPI;

})();
