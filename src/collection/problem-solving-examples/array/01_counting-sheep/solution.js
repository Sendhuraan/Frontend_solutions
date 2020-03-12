(function() {

	function CountSheep(arrayOfSheep) {

		this.arrayOfSheep = arrayOfSheep;
		this.index = function(arrayOfSheep) {

			var result = 0;

			this.arrayOfSheep.map(function(value) {
				if(value === true) {
					result++;
				}
			});

			return result;
			
		};

	}

	var publicAPI = {
		CountSheep
	}

	module.exports = publicAPI;
	
})();
