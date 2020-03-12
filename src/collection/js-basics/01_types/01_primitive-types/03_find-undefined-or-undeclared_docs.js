'use strict';

(function() {

	var nullFunction = function(){};

	describe('determine undeclared or undefined', function() {

		/* eslint-disable no-undef */
		try {
			undeclaredVar;
		}
		catch(err) {
			console.error(err);
		}

		var undefinedVar;

		if(typeof undefinedVar === 'undefined') {
			console.log('variable is declared, but value is undefined');
		}

		/* eslint-enable no-undef */

		it('when a variable is undeclared, we can use a try block and catch the reference error name to determine if it is undeclared', nullFunction);

		it('If we know that the variable is declared, but not assigned a value, the check the value of the typeof operator to undefined', nullFunction);
		
	});
	
})();
