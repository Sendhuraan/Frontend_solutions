'use strict';

(function() {

	var assert = require('chai').assert;

	describe('Primitive Types - Examples', function() {

		it('should return \'undefined\' when the variable is not yet declared or declared, but currently has no value', function() {
			var a;

			assert.equal(typeof a, 'undefined');
			
		});

		it('should return \'string\', when typeof operation is assigned to a variable, because typeof always return string.', function() {
			var output = typeof anyVarThatIsNotDeclaredOrNotDeclared;

			assert.equal(typeof output, 'string');
		});

		it('should return \'string\' if typeof operator is used on another typeof operation.', function() {
			assert.equal(typeof typeof 2, 'string');
		});
		
	});
	
})();
