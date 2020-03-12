'use strict';

(function() {

	var assert = require('chai').assert;

	describe('TODO: Naming collision problem', function() {

		/* eslint-disable no-redeclare */
		var teacher = 'Kyle';

		var teacher = 'Suzy';
		console.log(teacher);

		console.log(teacher);
		
		/* eslint-enable no-redeclare */

		it('TODO: Lexical Scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Use function declaration as scope', function() {

		/* eslint-disable no-undef */
		var teacher = 'Kyle';

		function anotherTeacher() {
			var teacher = 'Suzy';
			console.log(teacher);
		}

		anotherTeacher();

		console.log(teacher);
		
		/* eslint-enable no-undef */

		it('TODO: Use function declaration as scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Use function expression as scope', function() {

		var teacher = 'Kyle';

		function anotherTeacher() {
			var teacher = 'Suzy';
			console.log(teacher);
		}

		( anotherTeacher )();

		console.log(teacher);

		it('TODO: Use function expression as scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Use IIFE as scope', function() {

		var teacher = 'Kyle';

		(function anotherTeacher() {
			var teacher = 'Suzy';
			console.log(teacher);
		})();

		console.log(teacher);

		it('TODO: Use IIFE as scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Anonymous IIFE as scope', function() {

		var teacher = 'Kyle';

		(function() {
			var teacher = 'Suzy';
			console.log(teacher);
		})();

		console.log(teacher);

		it('TODO: Anonymous IIFE as scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Use try catch and IIFE', function() {

		/* eslint-disable no-undef */
		var teacher = (function() {
			try {
				return fetchTeacher(1);
			}
			catch(err) {
				return 'Kyle';
			}
		})();

		console.log(teacher);
		
		/* eslint-enable no-undef */

		it('TODO: Use try catch and IIFE', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
