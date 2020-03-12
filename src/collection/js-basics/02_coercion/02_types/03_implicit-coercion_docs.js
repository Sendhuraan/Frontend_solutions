/* eslint-disable eqeqeq */

'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('Implicit Coercion', function() {

		it('Implicit Coercion implies that result happens as a side effect of other operation. It is as if we say we want the end result to happen. But don\'t care how it happens. Let the computer decide how it should be performed. That doesn\'t mean that it is all bad. We should make an informed decision about how clearly we are communicating our intent.', nullFunction);

		describe('string -> number', function() {

			it('We want to convert a string to a number primitive in an implicit way. Like doing a mathematical operation which doesn\'t have any effect on the original value. The following are some examples', nullFunction);

			it('Subtracting with (0). The minus operator (-) is designed specifically to deal with numbers. When operated on values other than numbers, it tries to coerce the value to a number and then subtracts zero (like a no-operation) from it', function() {
				var a = '123';
				var output = a - 0;

				assert.equal(typeof output, 'number');
				assert.equal(output, 123);
			});

			it('In a similar way, subtracting with \'0\' would also give back the same result. In this case it would also try to coerce \'0\' to a number. As a matter of fact, subtracting with empty string \'\' will also work', function() {
				var a = '123';
				var output1 = a - '0';
				var output2 = a - '';

				assert.equal(typeof output1, 'number');
				assert.equal(output1, 123);

				assert.equal(typeof output2, 'number');
				assert.equal(output2, 123);
			});

			it('In a similar way, dividing by one also would give the same result', function() {
				var a = '123';
				var output = a / 1;

				assert.equal(typeof output, 'number');
				assert.equal(output, 123);
			});

			it('We should never do the coercion this way, as it doesn\'t convey our intentions correctly. But we should be aware of this.', nullFunction);

		});

		describe('number -> string', function() {

			it('Following are some of the ways, in which we convert number to string in an implicit way', nullFunction);

			it('Adding number with string. The (+) operator is designed to do mathematical addition. But if one of the operands is a string, then it prefers string concatenation. So it tries to convert the other operand into a string and adds the empty string (like no-operation) to it.', function() {
				var a = 123;
				var output = a + '';

				assert.equal(typeof output, 'string');
				assert.equal(output, '123');
			});

			it('Doing the same with (-) operator will not work, because there is no preference for string concatenation in (-) operator as it is in (+) operator. So it converts the operands to a number \'\' -> 0 and hence the coercion will not happen', function() {
				var a = 123;
				var output = a - '';

				assert.equal(typeof output, 'number');
				assert.equal(output, 123);
				
			});
			
		});

		describe('* -> boolean', function() {

			it('Whenever we write an if statement, the value is implicitly coerced to a boolean value. The following are some examples', nullFunction);

			it('Implicit coercion happens in an if statement. If any value that is not on the falsy list is passed to if statement, it passes', function() {
				var a = '123';
				var output;

				if (a) { 
					output = true; 
				}
				else {
					output = false;
				}

				assert.equal(typeof output, 'boolean');
				assert.equal(output, true);
			});

			it('Similarly, if we pass anything in the falsy list, then it evaluates to false', function() {

				var a = '';
				var output;

				if (a) { 
					output = true; 
				}
				else {
					output = false;
				}

				assert.equal(typeof output, 'boolean');
				assert.equal(output, false);
			});

			it('But, things start to act weird if we use (==) operator. If (==) operator is used to compare to a boolean value, it tries to convert both the operands to number. (==) PREFERS to checks numbers (IMPORTANT!). Hence when the statement (\'123\' == true) is executed, (==) operator coerces the operands to number primitives. So (\'123\' == true) -> (123 == 1), which results in false (weird!)', function() {
				var a = '123';
				var output;

				if (a == true) { 
					output = true; 
				}
				else {
					output = false;
				}

				assert.equal(typeof output, 'boolean');
				assert.equal(output, false);
			});

			it('Sometimes, it leads to a happy accident. In this case also, (==) prefers numbers and hence coerces \'\' to 0 and false to 0 (\'\' == false) -> (0 == 0), which results in true, but only as a happy accident (IMPORTANT!)', function() {
				var a = '';
				var output;

				if (a == false) { 
					output = true; 
				}
				else {
					output = false;
				}

				assert.equal(typeof output, 'boolean');
				assert.equal(output, true);
			});

			it('Similarly, Implicit coercion happens on objects as well. If an empty array [] is passed to an if statement, it tries to coerce it to a boolean meaning it calls ToBoolean abstract operation, which results in true, because [] is not in the falsy list', function() {
				var a = [];
				var output;

				if (a) { 
					output = true; 
				}
				else {
					output = false;
				}

				assert.equal(typeof output, 'boolean');
				assert.equal(output, true);
				
			});

			it('But, if we start using (==) operator on checking the objects, we get strange results. In this case we check ([] == true). As mentioned earlier, (==) prefers to check numbers, hence it coerces it\'s operands to its number primitive. So [] becomes 0 & true becomes 1 ([] == true) -> (0 == 1) which results in false', function() {
				var a = [];
				var output;

				if (a == true) { 
					output = true; 
				}
				else {
					output = false;
				}

				assert.equal(typeof output, 'boolean');
				assert.equal(output, false);
			});

			it('Implicit coercion also happens in (&&) operator. They act as a selection operators. It tries to evaluate the first operand if it is true, then it selects the other operand value or else selects the first operand value. In this case, it evaluates the empty string \'\', converting it to boolean results in false and hence first operand\'s value \'\' is selected and stored in output1 variable. For the next case, it evaluates the string \'123\', converting it to boolean results in true and hence the second operand\'s value is selected and stored in output2 variable.', function() {

				var a = '';
				var output1 = a && 'a';

				var b = '123';
				var output2 = b && 'b';

				assert.equal(typeof output1, 'string');
				assert.equal(output1, '');

				assert.equal(typeof output1, 'string');
				assert.equal(output2, 'b');

			});

			it('Implicit coercion also happens in (||) operator. They act as a selection operators. It tries to evaluate the first operand if it is true, then it selects that value or else selects the other value. In this case, it evaluates the empty string \'\', converting it to boolean results in false and hence other operand\'s value \'a\' is selected and stored in output variable', function() {

				var a = '';
				var output = a || 'a';

				assert.equal(typeof output, 'string');
				assert.equal(output, 'a');
			});

			it(`Since (==) operator prefers to do number comparison and not boolean coercion as we would expect, we usually get strange results. Hence it is better to avoid (==) in the following cases
				* boolean comparisons (== true or == false)
				* comparisons to either [], '' or 0
			`, nullFunction);
			
		});

	});
	
})();
