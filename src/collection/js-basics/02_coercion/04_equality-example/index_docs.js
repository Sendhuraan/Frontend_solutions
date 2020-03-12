/* eslint-disable eqeqeq */

'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('[] == ![] results true', function() {

		it('As mentioned earlier, (==) operator prefers to compare number rather than comparing boolean. In this example, when the following statement is executed [] == ![], it results in true (weird!)', function() {
			var output = ( [] == ![] );

			assert.equal(typeof output, 'boolean');
			assert.equal(output, true);
		});

		it('We are going to go step by step into how javascript evaluates this statement to true, based on all the rules we learnt.', nullFunction);

		it('Initially, when the statement is executed, there is an operator precedence. So the negate operator (!) gets precedence and it operates on []. Since (!) operator only operates on boolean primitive and since [] is an object, it calls ToBoolean abstract operation, which results in true, because [] is not in the falsy list. So now it becomes ( [] == !true ). It now is operated by (!) operated which results in false ( [] == false ).', nullFunction);

		it('Next, Since (==) operator prefers to do number comparison, the array [] on the LHS is to be converted to number primitive by ToNumber abstract operation. Since [] is an object, it runs ToPrimitive first, which results in \'\' ( \'\' == false). Now it runs ToNumber on it to get 0 ( 0 == false)', nullFunction);

		it('Next, it tries to convert the RHS to the number, which results in 0 ( 0 == 0 ), which in turn gives us true', nullFunction);

		it(`To summarize, following are the steps
			1. [] == ![]
			2. [] == !true 	(Negate precedence -> ToBoolean -> true (as it is not in falsy list))
			3. [] == false 	(Negate operator)
			4. '' == false 	([] -> == operator -> ToNumber -> ToPrimitive -> '')
			5. 0  == false 	('' -> ToNumber -> 0)
			6. 0  == 0 		(false -> ToNumber -> 0)
			7. true
		`, nullFunction);

		it('It is more predictable, if we follow the steps that are written in specs, because it is what the javascript does. Even though it might seem counter-intuitive in some cases, if we know the rules, we can predict it beforehand.', nullFunction);
	});
	
})();
