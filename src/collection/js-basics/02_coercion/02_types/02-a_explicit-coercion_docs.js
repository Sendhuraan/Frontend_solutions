'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('Explicit Coercion', function() {

		it('Explicit Coercion implies that it is obvious from the code that we are trying to do the coercion.', nullFunction);

		it('Of all the methods mentioned below, using the Native Function for conversion should be preferred, as it cleaner & communicates our intent clearly.', nullFunction);

		describe('string -> number', function() {

			it('We have a lot of use cases for converting string into number. There are a couple of ways to do it.', nullFunction);

			describe('parseInt', function() {

				it('parseInt is generally used in javascript to convert the given string into a number. But it is quite different from directly coercing the given value.', nullFunction);

				it('It literally parses the given value from left to right to find the numerical characters & stops when a non-numerical character starts. For Eg: when we give it a string \'123px\', it starts from left to right to collect the input and immediately stops once the parser hits the letter \'p\'.', nullFunction);

				it('This mechanism may result in unpredictable or undesirable results.', nullFunction);

				it('It parses and converts \'123px\' to number primitive 123', function() {
					var a = '123px';
					var output = parseInt(a, 10);

					assert.equal(typeof output, 'number');
					assert.equal(output, 123);
				});
				
			});

			describe('Number() Native Function', function() {

				it('Unlike parseInt, it is either convert or not convert at all. There is no parsing like parseInt. When the conversion fails it results in NaN.', nullFunction);

				it('when given a value like \'123px\', it fails and results in NaN', function() {
					var a = '123px';
					var output = Number(a);

					assert.equal(Number.isNaN(output), true);
				});

				it('It can be used to convert a given value into a number primitive, and it runs the ToNumber abstract operation.', nullFunction);

				it('successfully converts the given value to a number primitive', function() {
					var a = '123';
					var output = Number(a);

					assert.equal(typeof output, 'number');
					assert.equal(output, 123);
				});
				
			});

			describe('Unary (+) operator', function() {

				it('The Unary (+) operator when operated on operands tries to convert it to number primitive by running the ToNumber abstract operation.', nullFunction);

				it('It may not look like explicit, Maybe we think of it as explicitly implicit.', nullFunction);

				it('converts the given value to a number primitive', function() {
					var a = '123';
					var output = +a;

					assert.equal(typeof output, 'number');
					assert.equal(output, 123);
				});
				
			});
			
		});


		describe('number -> string', function() {

			it('We have a lot of use cases for converting number into string. There are a couple of ways to do it.', nullFunction);

			describe('toString', function() {

				it('toString is actually a method. Then we would expect it not to operate on a primitive. But actually it works (yay!). When the toString method is called on a primitive, it converts the primitive into its object wrapper (implicit) and then calls the method (explicit). It is called boxing', nullFunction);

				it('We think of it as explicitly implicit.', nullFunction);

				it('converts the given value to a string primitive', function() {
					var a = 123;
					var output = a.toString();

					assert.equal(typeof output, 'string');
					assert.equal(output, '123');
				});
				
			});

			describe('String() Native Function', function() {

				it('It can be used to convert a given value into a number primitive, and it runs the ToNumber abstract operation.', nullFunction);

				it('converts the given value to a string primitive', function() {
					var a = 123;
					var output = String(a);

					assert.equal(typeof output, 'string');
					assert.equal(output, '123');
				});
				
			});

		});

		describe('* -> boolean', function() {

			it('We have a lot of use cases for converting any primitive type into boolean. There are a couple of ways to do it.', nullFunction);

			describe('Boolean() Native Function', function() {

				it('It can be used to convert a given value into a boolean primitive, and it runs the ToBoolean abstract operation.', nullFunction);

				it('converts the given value to a boolean primitive', function() {
					var a = '';
					var output = Boolean(a);

					assert.equal(typeof output, 'boolean');
					assert.equal(output, false);
				});
				
			});

			describe('(!!) Double Negate Operator', function() {

				it('By seeing the double negate, it is easy to believe that there is a actually a double negate operator. But there is no such thing.', nullFunction);

				it(`The following happens when double negate operator is operated,
					1. The first negate operator tries to converts the given value to a boolean and then negates its value (implicit).
					2. The second negate flips its value to give us the correct boolean value (explicit).
				`, nullFunction);

				it('We think of it as explicitly implicit.', nullFunction);

				it('converts the given value to a boolean primitive. When tried to coerce to a boolean, [] results in true, because it is not in the falsy list. Refer to ToBoolean abstract operation.', function() {
					var a = [];
					var output = !!a;

					assert.equal(typeof output, 'boolean');
					assert.equal(output, true);
				});
				
			});

			describe('(?:) Ternary Operator', function() {

				it('When ternary operator is operated on a value, it first tries to coerce it to a boolean primitive & then it checks to value to determine true or false.', nullFunction);

				it('We think of it as explicitly implicit.', nullFunction);

				it('converts the given value to a boolean primitive', function() {
					var a = '';
					var output = a ? true : false;

					assert.equal(typeof output, 'boolean');
					assert.equal(output, false);
				});
				
			});
			
		});
		
	});
	
})();
