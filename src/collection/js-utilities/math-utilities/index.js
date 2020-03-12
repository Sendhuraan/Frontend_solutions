(function() {

	function isEven(x) {
		var result;

		if(x % 2 === 0) {
			result = true;
		}
		else {
			result = false;
		}

		return result;
	}

	function isOdd(x) {
		return !isEven(x);
	}

	var publicAPI = {
		isEven,
		isOdd
	};

	module.exports = publicAPI;
	
})();
