'use strict';

(function() {

	var assert = require('chai').assert;

	describe('TODO: Function Expression', function() {

		/* eslint-disable no-undef, no-inner-declarations */
		try {
			function teacher() {
				return 'Kyle';
			}

			var myTeacher = function anotherTeacher() {
				console.log(anotherTeacher);
			};

			console.log(teacher);
			console.log(myTeacher);
			console.log(anotherTeacher);
		}
		catch(err) {
			console.error(err);
		}
		
		/* eslint-enable no-undef, no-inner-declarations */

		it('TODO: Function Expression', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
