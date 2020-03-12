/* eslint-disable no-bitwise */

'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('Explicit Coercion Examples', function() {

		describe('Date', function() {

			it('There is no literal syntax for creating date objects. We have to use the new Date() to create a date object. For most use cases, we need to get the current time in unix time stamp.', nullFunction);

			it('It turns out that the date object when coerced to a number returns the current time in unix timestamp. Also there is a utility Date.now() which also returns the current time. The usage of Number native function clearly communicates our intent, rather than using unary (+) operator. Hence native functions should be preferred in this case.', function() {
				var dateByCoercion1 = Number(new Date());
				var dateByCoercion2 = +new Date();

				var dateByUtility = Date.now();

				assert.equal(dateByCoercion1, dateByUtility);
				assert.equal(dateByCoercion2, dateByUtility);
			});

			it('It is notable that parseInt cannot be used to parse the number from the date object, because new Date() returns string value, which when parsed returns NaN', function() {
				var dateByCoercion1 = parseInt(new Date(), 10);

				assert.equal(Number.isNaN(dateByCoercion1), true);
			});
			
		});

		describe('indexOf (-1) -> ~ Operator', function() {

			it('We use indexOf method to see whether there is a substring in a given string, if found, it returns the index of the character or it returns (-1)', nullFunction);

			it('The problem with (-1) is that it is a truthy value, because it is not in falsy list. So if we need to check for true/false, we would need to use === -1. Maybe a sensible result of such functions like indexOf is either false or NaN. But we do not get that.', nullFunction);

			it('An alternate approach is to use (~) operator. The (~) operator when operated, adds one to it and negates the value ~x -> -(x+1). It is called one\'s complement.', function() {
				var a = 5;
				var output = ~a;

				assert.equal(output, -6);
			});

			it('Using the above property, if the return value of a function is (-1) then ~(-1) would result in (-0) as shown ~(-1) -> -(-1+1) -> -0. Since (-0) is falsy, we could use it as a boolean primitive (yay!).', function() {
				function isStringFound(substr, str) {
					return ~(str.indexOf(substr)) ? true : false;
				}

				assert.equal(isStringFound('a','abc'), true);
				assert.equal(isStringFound('A','abc'), false);
				
			});

			it('Even though, the syntax is very concise, if some developer were to read this, it is harder to understand what the (~) operator does & why it is used in such a way.', nullFunction);

			it('As of ES6, there is a utility includes() which behaves exactly as we would expect. It returns a boolean when checked for a substring in a string.', function() {
				var a = 'ABC';
				var output = a.includes('A');

				assert.equal(output, true);
			});
			
		});
		
	});
	
})();
