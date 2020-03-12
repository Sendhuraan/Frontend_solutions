'use strict';

(function() {

	var inputArray = [-4,3,-9,0,4,1];

	function plusMinus(input) {

		var output = [...input];

		var counterObj = {
			positive: 0,
			negative: 0,
			zero: 0
		};

		output.forEach(function(value) {
			if(value > 0) {
				counterObj['positive']++;
			}
			else if(value < 0) {
				counterObj['negative']++;
			}
			else if(value === 0) {
				counterObj['zero']++;
			}
		});

		console.log((counterObj['positive']/output.length).toPrecision(6));
		console.log((counterObj['negative']/output.length).toPrecision(6));
		console.log((counterObj['zero']/output.length).toPrecision(6));
		
	}

	plusMinus(inputArray);
	
})();




