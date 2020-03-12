(function() {

	function swap(inputArray, index_A, index_B) {
		var temp = inputArray[index_A];
		inputArray[index_A] = inputArray[index_B];
		inputArray[index_B] = temp;
	}

	function naive(inputArray) {

		var outputArray = [...inputArray];

		for(let pass = 0; pass < outputArray.length; pass++) {

			for(let currentIndex = 0; currentIndex < outputArray.length; currentIndex++) {
				let nextIndex = currentIndex + 1;

				if(outputArray[currentIndex] > outputArray[nextIndex]) {
					swap(outputArray, currentIndex, nextIndex);
				}
			}
		}

		return outputArray;
		
	}

	function fromEnd(inputArray) {

		var outputArray = [...inputArray];

		// One less pass, because the largest elements bubbles up to the last.
		for(let pass = outputArray.length; pass > 0; pass--) {

			for(let currentIndex = 0; currentIndex < pass - 1; currentIndex++) {
				let nextIndex = currentIndex + 1;

				if(outputArray[currentIndex] > outputArray[nextIndex]) {
					swap(outputArray, currentIndex, nextIndex);
				}
			}
		}

		return outputArray;
	}

	function improved(inputArray) {

		var outputArray = [...inputArray];
		var isSorted;

		// One less pass, because the largest element bubbles up to the last.
		for(let pass = outputArray.length; pass > 0; pass--) {

			do {

				for(let currentIndex = 0; currentIndex < pass - 1; currentIndex++) {
					let nextIndex = currentIndex + 1;

					if(outputArray[currentIndex] > outputArray[nextIndex]) {
						swap(outputArray, currentIndex, nextIndex);

						isSorted = false;
					}
				}

			} while(isSorted);

		}

		return outputArray;
		
	}

	var publicAPI = {
		naive,
		fromEnd,
		improved
	};

	module.exports = publicAPI;
	
})();
