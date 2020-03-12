(function() {
	
	async function isDBEmpty(db, collection) {
		const result = await db.collection(collection).find({}).toArray();
		return (result.length === 0);
	}

	var publicAPI = {
		isDBEmpty
	};

	module.exports = publicAPI;

})();
