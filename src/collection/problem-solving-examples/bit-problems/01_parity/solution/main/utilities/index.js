(function() {

	function buildTable() {
		var table = [];

		for(var i = 0; i < 2**16 ; i++) {
			table[i] = this.using_xor(i);
		}

		return table;
	}

	var publicAPI = {
		buildTable
	};

	module.exports = publicAPI;
	
})();
