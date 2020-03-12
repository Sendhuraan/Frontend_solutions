'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function(){};

	describe('Special Values Quiz', function() {

		/* eslint-disable no-redeclare */
		var baz = 2;
		var output1 = typeof baz;

		var baz;
		var output2 = typeof baz;
		
		baz = null;
		var output3 = typeof baz;

		baz = 'baz' * 3;
		var output4 = baz;
		var output5 = typeof baz;

		baz = 1 / 0;
		var output6 = baz;
		var output7 = typeof baz;

		/* eslint-enable no-redeclare */

		it('In Javascript, there are two phases - compile & execution phase. During the compile phase, the declaration on LHS of = are compiled and references of all the variables are created in respective scopes. And then, In execution phase, RHS of = are executed and values are assigned to the variables in that scope.', nullFunction);

		it('In compile phase, all the variables to LHS of = will be compiled. when baz is again declared, it would have already created reference for baz, hence it will be ignored.', nullFunction);
		
		it('In execution phase, output1 is assigned typeof number, output1 should be \'number\', as typeof number returns \'number\'', function() {
			assert.equal(output1, 'number');
		});

		it('Next, since that statement is ignored, output2 will be same as output1', function() {
			assert.equal(output2, 'number');
		});

		it('Next, baz is assigned null and typeof null should return object (Note: This is bug in Javascript). Hence output3 will be equal to \'object\'', function() {
			assert.equal(output3, 'object');
		});

		it('Next, baz is assigned \'baz\'*3. As (*) operator only works on numbers, it would try to convert \'baz\' to a number, which would fail and result in NaN. Hence output4 will be NaN', function() {
			assert.equal(Number.isNaN(output4), true);
		});

		it('Next then, typeof NaN would be assigned to output5, which would be \'number\'', function() {
			assert.equal(output5, 'number');
		});

		it('Next, baz is assigned (1 / 0), which results in Infinity', function() {
			assert.equal(output6, Infinity);
		});
		
		it('Next then, typeof Infinity is assigned to output7, which would be equal to \'number\'', function() {
			assert.equal(output7, 'number');
		});
	});

	describe('banana', function() {

		it('should return \'banana\' when the following expression is evaluated', function() {
			var output = ('b' + 'a' + + 'a' + 'a').toLowerCase();

			assert.equal(output, 'banana');
			
		});

		it('We are going to go step by step into how javascript evaluates this statement to banana, based on properties of NaN we learnt.', nullFunction);

		it('The last before \'a\' is treated as unary addition. It cannot work on strings. So, it tries to coerce to number, which fails and results in NaN' + '\n\t' +
			`The expression becomes 'b' + 'a' + NaN + 'a'
			`, nullFunction);

		it('Then other expression leads us with string concatenation.' + '\n\t' +
			`The expression becomes 'baNaNa'
			`, nullFunction);

		it('The .toLowerCase() function is applied then.' + '\n\t' +
			`The expression becomes 'banana'
			`, nullFunction);
		
	});


	describe('Cats Age', function() {

		/* eslint-disable no-unused-vars, no-self-compare */
		var myAge = Number('0o46');
		var myNextAge = Number('39');
		var myCatsAge = Number('N/A');

		var output1 = myAge - 'my son\'s age';
		var output2 = typeof (myAge - 'my son\'s age');

		var output3 = myCatsAge === myCatsAge;

		var output4 = isNaN(myAge);
		var output5 = isNaN(myCatsAge);
		var output6 = isNaN('my son\'s age');

		var output7 = Number.isNaN(myCatsAge);
		var output8 = Number.isNaN('my son\'s age');

		/* eslint-enable no-unused-vars, no-self-compare */


		it('First, myAge will convert the age to number, which is represented in octal form', nullFunction);

		it('Next, the string \'39\' is converted to number', nullFunction);

		it('Next, the string \'N/A\' is converted to number. It fails and results in NaN', nullFunction);
		
		it('Next, myAge gets subtracted from string \'my son\'s age\', which results in NaN', function() {
			assert.equal(Number.isNaN(output1), true);
		});

		it('Next, typeof NaN is a number. NaN represents invalid number. So, the typeof NaN is always a number', function() {
			assert.equal(output2, 'number');
		});

		it('Next, we compare NaN to itself. Since NaN is the only value, which is not equal to itself. we get false', function() {
			assert.equal(output3, false);
		});

		it('Next, we check for NaN using the global isNaN utility. When checked with a number, it results false', function() {
			assert.equal(output4, false);
		});

		it('Next, we check for NaN, which results in true. Good!', function() {
			assert.equal(output5, true);
		});

		it('Next, we pass a normal string to check for NaN. Unfortunately it results in true. Because, before checking it tries to convert the passed value and then checks for NaN.', function() {
			assert.equal(output6, true);
		});

		it('Fortunately, we got Number.isNaN to prevent from the mistakes above. When NaN is passed, it results true', function() {
			assert.equal(output7, true);
		});

		it('And if normal string is passed, it results false', function() {
			assert.equal(output8, false);
		});

	});


	describe('Trend Rate', function() {

		/* eslint-disable  no-compare-neg-zero */
		var trendRate = -0;

		var output1 = trendRate === -0;

		var output2 = trendRate.toString();
		var output3 = trendRate === 0;
		var output4 = trendRate < 0;
		var output5 = trendRate > 0;

		var output6 = Object.is(trendRate, 0);
		var output7 = Object.is(trendRate, -0);

		/* eslint-enable  no-compare-neg-zero */

		it('First, trendRate is assigned negative zero (-0)', nullFunction);

		it('Next, if we check with === -> it results true. Good', function() {
			assert.equal(output1, true);
		});

		it('Next, when we try to convert to string, we get zero (weird!)', function() {
			assert.equal(output2, 0);
		});
		
		it('Next, when we check with (0), it results in true (Not Good!)', function() {
			assert.equal(output3, true);
		});

		it('Next, again when checked < or >, it results in false. (-0) is neither greater than (0) or less than (0). Not Good again!', function() {
			assert.equal(output4, false);
			assert.equal(output5, false);
		});

		it('Fortunately, we got Object.is to check for correct (-0) value. when passed (0) it returns false', function() {
			assert.equal(output6, false);
		});

		it('Next, if we pass (-0), we get true. Good!', function() {
			assert.equal(output7, true);
		});

	});
	
})();
