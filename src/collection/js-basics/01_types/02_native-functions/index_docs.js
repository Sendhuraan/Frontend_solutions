'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('Native Functions', function() {

		it('Native funtions can be called with new operator in front of it or can be called as regular functions.', nullFunction);

		it(`Classified into
			String
			Number
			Boolean
			Array
			Object
			RegExp
			Date
			Function
			Error
		`, nullFunction);

		describe('Call Natives as Constructors', function() {

			it('Calling with new operator creates an object wrapper around the primitive type. This can be verified using typeof operator on the newly constructed object', function() {
				var output = new String('abc');

				assert.equal(typeof output, 'object');
			});

			it('There are some caveats in calling as constructors, as it constructs object around primitives.', nullFunction);

			it('Example, false as (boolean primitive) is falsy, but false as (Boolean Object) is truthy. Calling new Boolean(false) will return empty object, which is truthy (weird!)', function() {
				var a = false;
				var b = new Boolean(false);

				assert.equal(a, false);
				assert.equal(Boolean(b), true);
			});

			it('Similarly, 0 as (number primitive) is falsy, but 0 as (Number Object) is truthy. Calling new Number(0) will return empty object, which is truthy (weird!)', function() {
				var a = 0;
				var b = new Number(0);

				assert.equal(a, false);
				assert.equal(Boolean(b), true);
			});

			it('Similarly, \'\' as (string primitive) is falsy, but \'\' as (String Object) is truthy. Calling new String(\'\') will return empty object, which is truthy (weird!)', function() {
				var a = '';
				var b = new String('');

				assert.equal(a, false);
				assert.equal(Boolean(b), true);
			});

			it('Hence, it is better to avoid building primitives using constructors.', nullFunction);
			
		});

		describe('Call Natives as Functions', function() {

			it('Calling as regular function creates the primitive respectively', function() {
				var output = String('abc');

				assert.equal(typeof output, 'string');
			});

			it('Calling as regular function will also coerce the value to its primitive type', function() {
				var output = String(42);

				assert.equal(typeof output, 'string');
			});
			
		});

	});

	describe('Array', function() {
		
		it('Array can be created by constructor form or literal syntax.', nullFunction);

		describe('Constructor Syntax', function() {
			
			it('In this form, arrays can be created by using new operator', function() {
				var arr = new Array(1,2,3);

				assert.equal(typeof arr, 'object');
				assert.equal(arr.length, 3);
				assert.equal(arr[0], 1);
			});

			it('But, When called with single value like new Array(5), we would expect that it would create an array with one element of value 5. But because Array Constructor is overloaded, it creates an array with 5 empty slots instead (weird!)', function() {
				var arr = new Array(5);

				assert.notEqual(arr[0], 5);
				assert.equal(arr.length, 5);
			});

			it('Hence, it is better to avoid constructor syntax due to these caveats.', nullFunction);

		});

		describe('Literal Syntax', function() {
			
			it('In this form, arrays can be created by using square brackets []', function() {
				var arr = [1,2,3];

				assert.equal(typeof arr, 'object');
				assert.equal(arr.length, 3);
				assert.equal(arr[0], 1);
			});

			it('It is always preferable to use the literal syntax. It reads clearly and communicates our intent in a better way.', nullFunction);

		});

	});

	describe('Object', function() {
		
		it('Object can be created by constructor form or literal syntax.', nullFunction);

		describe('Constructor Syntax', function() {
			
			it('In this form, object can be created by using new operator. Object parameters can be added or accessed by using dot operator obj.<parameterName> or square brackets [<parameterName>]', function() {
				var obj = new Object();
				obj.a = 1;
				obj['b'] = 2;
				obj.c = 3;

				assert.equal(typeof obj, 'object');
				assert.equal(obj.a, 1);
				assert.equal(obj['b'], 2);
			});

			it('Hence, it is better to avoid constructor syntax, as it is less performant.', nullFunction);

		});

		describe('Literal Syntax', function() {
			
			it('In this form, objects can be created by using curly braces {}', function() {
				var obj = {
							a: 1,
							b: 2,
							c: 3
						};

				assert.equal(typeof obj, 'object');
				assert.equal(obj['a'], 1);
				assert.equal(obj.b, 2);
			});

			it('It is always preferable to use the literal syntax. It reads clearly, communicates our intent in a better way and more performant.', nullFunction);

		});

	});


	describe('RegExp', function() {
		
		it('Regular Expression can be created by constructor form or literal syntax.', nullFunction);

		describe('Constructor Syntax', function() {
			
			it('In this form, regular expression can be created by using new operator. The constructor form is useful if you want to create regular expression dynamically', function() {
				var pattern = new RegExp('^hello');

				assert.equal(typeof pattern, 'object');
				assert.equal(pattern.test('hello world!'), true);
			});

		});

		describe('Literal Syntax', function() {
			
			it('In this form, regular expression can be created by using double slashes /<Pattern>/', function() {
				var pattern = /^hello/;

				assert.equal(typeof pattern, 'object');
				assert.equal(pattern.test('hello world!'), true);
			});

			it('It is always preferable to use the literal syntax. It reads clearly, communicates our intent in a better way and more performant.', nullFunction);

		});

	});

	describe('Date', function() {
		
		it('Date object can be created only by constructor form.', nullFunction);

	});

	describe('Function', function() {
		
		it('Functions can be created by constructor form or literal syntax (as statement or expression).', nullFunction);

		describe('Constructor Syntax', function() {

		});

		describe('Literal Syntax - Function Statement', function() {

		});

		describe('Literal Syntax - Function Expression', function() {

		});

	});

	describe('Error', function() {

	});
	
})();
