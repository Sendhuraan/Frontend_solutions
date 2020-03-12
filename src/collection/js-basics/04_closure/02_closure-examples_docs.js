'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function() {};

	describe('Power values', function() {

		/* eslint-enable no-use-before-define */
		function power(powerValue) {
			return function(value) {
				return Math.pow(value, powerValue);
			};
		}

		function powerMap(inputArr, inputPower) {
			return inputArr.map(power(inputPower));
		}

		console.log(powerMap([1,2,3], 2));  // [1,4,9]

		/* eslint-enable no-use-before-define */

		it('Problem Statement: If we are given an array of values and integer value for power, return value ** power.' + '\n\t' +
			'Eg: Given [1,2,3] and 2 => [1,4,9]' + '\n\t' +
			'Eg: Given [1,2,3] and 3 => [1,8,27]', nullFunction);

		it('Here, when the function power is called inside map, it in turn returns another function and this function is used for mapping over the values. But the inputPower value that is sent is remembered, even when the power function is already finished executing. It forms a closure, closing over the variable powerValue.', nullFunction);

		it('should return [1,4,9] when [1,2,3] and 2 is passed.', function() {

			var output = powerMap([1,2,3], 2);

			assert.deepEqual(output, [1,4,9]);
			
		});

	});
	
})();
