/* eslint eqeqeq: 'off', no-self-compare: 'off', no-compare-neg-zero: 'off' */

'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('Special Values', function() {
		
		it(`Classified into
			NaN (Not a Number)
			+0
			-0
			+Infinity
			-Infinity
			null
			undefined (void)
			`, nullFunction);
		
	});

	describe('NaN (Not a Number)', function() {

		it('Whenever there is a numeric operation, if the operands are not number, the engine tries to convert it to a number. When the number conversion fails, it results in NaN. It is a special sentinel value, when the number conversion fails', function() {
			var output = 'a' / 2;

			assert.equal(Number.isNaN(output), true);
		});

		it('typeof NaN is a number, because if we try to do numeric operation and ended in NaN, It is expected to be a number', function() {
			var output = 'a' / 2;
			
			assert.equal(typeof output, 'number');
		});

		it('NaN when operated on any other operands will result in NaN', function() {
			var a = 'a' * 2;
			var output = a + 2;

			assert.equal(Number.isNaN(output), true);
		});

		it('It is the only value that is not equal to itself', function() {
			var a = 'a' * 2;
			var output = a + 2;

			assert.notEqual(output, a);
		});

		describe('Check for NaN', function() {

			describe('Global isNaN Utility', function() {

				it('We need to have a way to check for NaN. It is by using global isNaN utility. But there is fatal flaw in this utility. isNaN before checking the value, it tries to converts the given value to a number and then checks to see if it resulted in NaN', nullFunction);

				it('returns true when used isNaN on a string. While we may expect it to give false, as given a string, we expect that isNaN(\'<String Value>\') to be false. But it first tries to convert the string into number, and it results in NaN, so it returns true', function() {
					assert.equal(isNaN('a'), true);
				});

				it('We could create a utility which works the way we think, by first checking if it is a number and then checking with isNaN utility', function() {
					function isNaNCustom(x) {
						return (
							typeof x == 'number' &&
							window.isNaN(x)
						);
					}

					assert.equal(isNaNCustom('a'), false);
				});

				it('We could also take advantage of the fact that NaN is the only value that is not equal to itself, to create the same utility', function() {
					function isNaNCustom(x) {
						return x != x;
					}

					assert.equal(isNaNCustom('a'), false);
				});

			});

			describe('Number.isNaN Utility', function() {

				it('Fortunately, we have Number.isNaN() utility (added in ES6 as polyfill), which checks for NaN without converting it to a number', nullFunction);

				it('returns false when used Number.isNaN on a string', function() {
					assert.equal(Number.isNaN('a'), false);
				});
				
			});

			describe('Object.is Utility', function() {

				it('Another way to check for NaN is to check with Object.is Utility', nullFunction);

				it('returns true when checked with NaN', function() {
					var output = 'a' / 2;
					
					assert.equal(Object.is(output, NaN), true);
				});

				it('returns false when used Object.is on a string', function() {
					assert.equal(Object.is('a', NaN), false);
				});
				
			});
			
		});

	});

	describe('-0 (Negative Zero)', function() {

		it('The only way to get a negative zero (-0) would be to multiply or divide (0) by unary negate (-) operator. But we could not check for (-0) using the === operator, as we would see in the following examples', nullFunction);

		it('We could check by doing (1 / (-0)) which should result in -Infinity', nullFunction);

		it('We could check by using Object.is utility', nullFunction);

		describe('Check for (-0)', function() {

			describe('=== operator', function() {

				it('returns true if we check against (-0)', function() {
					var a = 0 / -3;
					var output = (a === -0);

					assert.equal(output, true);
				});

				it('Unfortunately, it returns true even if we check against (0)', function() {
					var a = 0 / -3;
					var output = (a === 0);

					assert.equal(output, true);
				});

				it('It even returns true, when we check (0) to (-0)', function() {
					var output = (0 === -0);

					assert.equal(output, true);
				});
				
			});

			describe('-Infinity', function() {

				it('returns true if we check against -Infinity by doing (1 / -0)', function() {
					var a = 0 / -3;
					var output = 1 / a;

					assert.equal(output, -Infinity);
				});

				it('We could create a utility, that checks using === & -Infinity property', function() {
					function isNegZero(x) {
						return (
							x	  === 0 &&
							(1/x) === -Infinity
						);
					}

					assert.equal(isNegZero(-0), true);
				});
				
			});

			describe('Object.is Utility', function() {

				it('Object.is Utility is like quadruple equals. It can be used to check -0 & NaN', nullFunction);

				it('returns true if we check with -0', function() {
					var output = 0 / -3;
					assert.equal(Object.is(output, -0), true);
				});
				
			});
			
		});

	});
	
})();
