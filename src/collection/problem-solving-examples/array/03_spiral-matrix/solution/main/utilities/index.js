'use strict';

(function() {

	function bottomUp_helper(arr, index, current, results) {

		if(index === arr.length) {
			results.push(current.slice());
			return false;
		}

		bottomUp_helper(arr, index+1, current.concat([arr[index]]), results);
		bottomUp_helper(arr, index+1, current, results);
	}

	function topDown_helper(arr, index, current, results) {
		results.push(current.slice());

		for(let i=index; i < arr.length; i++) {
			current.push(arr[i]);
			topDown_helper(arr, i+1, current, results);
			current.pop();
		}
	}

	var publicAPI = {
		bottomUp_helper,
		topDown_helper
	};

	module.exports = publicAPI;
	
})();
