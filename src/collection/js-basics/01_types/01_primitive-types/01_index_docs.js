'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('Primitive Types', function() {

		it('Given a primitive type, we have a set of expected behaviors for that type. Eg: Given number 42, it has expected behaviors such as we can do math on that. Given a string \'42\', we can expect it to get its individual chars and print to console.', nullFunction);
		
		it(`Classified into
			undefined
			null 
			string 
			number 
			boolean 
			object 
				function (subtype of object - special callable object)
			symbol (ES6)
			bigint (ES6)
		`, nullFunction);

		it('As Javascript is dynamically typed language, it has type of a VALUE that the variable is currently holding', nullFunction);

		it('when typeof operator used on a variable, returns the value type that the variable is currently holding', nullFunction);

		it('typeof operator will always return a string. It will not actually return the primitive type of the variable', nullFunction);

		it('returns string \'number\' when used typeof operator on number', function() {
			assert.equal(typeof 42, 'number');
		});

		it('returns string \'string\' when used typeof operator on string', function() {
			assert.equal(typeof '42', 'string');
		});

		it('returns string \'boolean\' when used typeof operator on boolean', function() {
			assert.equal(typeof true, 'boolean');
		});

		it('returns string \'object\' when used typeof operator on object', function() {
			assert.equal(typeof { a: 1 }, 'object');
		});

		it('returns string \'function\' when used typeof operator on function', function() {
			assert.equal(typeof function(){}, 'function');
		});
		
	});

	describe('null - a historical bug in javascript', function() {

		it('returns string \'object\' when used typeof operator on null, while we may expect that it should return \'null\'. This is a bug in javascript', function() {
			assert.equal(typeof null, 'object');
		});

	});

	describe('undeclared vs undefined', function() {

		it('returns string \'undefined\' when used typeof operator on variable that is not DECLARED', function() {
			assert.equal(typeof anyVarThatIsNotDeclared, 'undefined');
		});

		it('returns string \'undefined\' when used typeof operator on variable that is not DEFINED', function() {
			var foo;

			assert.equal(typeof foo, 'undefined');
		});

	});

	describe('bigint', function() {

		// bigint is supported from node v10. Commenting for now.
		// it('returns string \'bigint\' when used typeof operator on bigint', function() {
		// 	var biginteger = 42n;
		// 	assert.equal(typeof biginteger, 'bigint');
		// });

		it('It is a separate partition from numbers, where it grow upto memory limit of the system. It can\'t be mixed and matched with regular numbers.', nullFunction);
	});

	describe('symbol', function() {

		it('returns string \'symbol\' when used typeof operator on symbol', function() {
			var symbol = Symbol();
			assert.equal(typeof symbol, 'symbol');
		});

	});

	describe('Primitive Type - function', function() {

		it('As mentioned earlier, given a primitive type, we have a set of expected behaviors for that type. Definitely, a function has some set of expected behaviors. Eg: We can call a function', nullFunction);

		it('is not actually a primitive type. It is a subtype of object primitive. It is also referred to as callable object', nullFunction);
		
	});

	describe('Other in-built types are objects', function() {
		
		it('returns string \'object\' when used typeof operator on other built in objects like Array, Date, Regular expression, etc', nullFunction);

		it('returns string \'object\' when used typeof operator on arrays', function() {
			var array = [];
			assert.equal(typeof array, 'object');
		});

		it('returns string \'object\' when used typeof operator on dates', function() {
			var date = new Date();
			assert.equal(typeof date, 'object');
		});

		it('returns string \'object\' when used typeof operator on regular expressions', function() {
			var pattern = /ab/gi;
			assert.equal(typeof pattern, 'object');
		});

	});
	
})();
