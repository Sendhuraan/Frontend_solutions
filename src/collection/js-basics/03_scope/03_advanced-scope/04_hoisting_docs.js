'use strict';

(function() {

	var assert = require('chai').assert;

	describe('TODO: Variable hoisting', function() {

		/* eslint-disable no-use-before-define */
		console.log(student);
		console.log(teacher);

		var student = 'You';
		var teacher = 'Kyle';

		/* eslint-enable no-use-before-define */

		it('TODO: Variable hoisting', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Function hoisting', function() {

		teacher();

		function teacher() {
			return 'Kyle';
		}

		it('TODO: Function hoisting', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Function expressions cannot be hoisted', function() {

		/* eslint-disable no-inner-declarations */
		try {
			var otherTeacher;

			teacher();
			otherTeacher();

			function teacher() {
				return 'Kyle';
			}

			otherTeacher = function() {
				return 'Suzy';
			};
		}
		catch(err) {
			console.error(err);
		}
		/* eslint-enable no-inner-declarations */
		
		it('TODO: Function expressions cannot be hoisted', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Variable hoisting gotcha', function() {

		/* eslint-disable no-unused-vars, no-use-before-define */
		var teacher = 'kyle';
		otherTeacher();

		function otherTeacher() {
			console.log(teacher);
			var teacher = 'Suzy';
		}

		/* eslint-enable no-unused-vars, no-use-before-define */

		it('TODO: Variable hoisting gotcha', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Variable hoisting usually bad & function hoisting can be useful', function() {

		/*
		function getId() {
			
			// executable code here
			return processedId();

			// private functions below
			function processedId() {
			
			}

			function getDBConnection() {
			
			}
			...
		}
		*/

		it('TODO: Variable hoisting usually bad & function hoisting can be useful', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: let hoisting (Temporal dead zone error)', function() {

		/* eslint-disable no-unused-vars, no-use-before-define */
		try {
			{
				teacher = 'Kyle';
				let teacher;
			}

			var teacher;

			{
				console.log(teacher);
				let teacher = 'Suzy';
			}
		}
		catch(err) {
			console.error(err);
		}

		/* eslint-enable no-unused-vars, no-use-before-define */

		it('TODO: let hoisting (Temporal dead zone error)', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
