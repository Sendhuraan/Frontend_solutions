'use strict';

(function() {

	var assert = require('chai').assert;

	describe('TODO: Use block scope', function() {

		var teacher = 'Kyle';

		{
			let teacher = 'Suzy';
			console.log(teacher);
		}
		
		console.log(teacher);

		it('TODO: Use block scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Block scope intent', function() {

		/* eslint-disable no-unused-vars, no-redeclare */
		function diff(x, y) {
			if(x > y) {
				var tmp = x;
				x = y;
				y = tmp;
			}

			return y - x;
		}

		function diff(x, y) {
			if(x > y) {
				let tmp = x;
				x = y;
				y = tmp;
			}

			return y - x;
		}
		
		/* eslint-enable no-unused-vars, no-redeclare */

		it('TODO: Block scope intent', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Use let and var in intended places', function() {

		/* eslint-disable no-unused-vars, no-redeclare */
		function repeat(fn, n) {
			var result;

			for(var i=0; i < n; i++) {
				result = fn(result, i);
			}

			return result;
		}

		function repeat(fn, n) {
			var result;

			for(let i=0; i < n; i++) {
				result = fn(result, i);
			}

			return result;
		}
		
		/* eslint-enable no-unused-vars, no-redeclare */

		it('TODO: Use let and var in intended places', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: var is preferable in some cases (try catch)', function() {

		/* eslint-disable no-unused-vars, no-undef, no-redeclare */
		function lookupRecord(searchStr) {
			try {
				var id = getRecord(searchStr);
			}
			catch(err) {
				var id = -1;
			}

			return id;
		}
		
		/* eslint-enable no-unused-vars, no-undef, no-redeclare */

		it('TODO: var is preferable in some cases (try catch)', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Explicit let block', function() {

		/* eslint-disable no-undef, no-unused-vars */
		function formatStr(str) {
			{ let prefix, str;
				prefix = str.slice(0, 3);
				rest = str.slice(3);
				str = prefix.toUpperCase() + rest;
			}

			if(/^FOO:/.test(str)) {
				return str;
			}

			return str.slice(4);
		}
		
		/* eslint-enable no-undef, no-unused-vars */

		it('TODO: Explicit let block', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: const', function() {

		/* eslint-disable no-unused-vars, no-const-assign */
		try {
			var teacher = 'Suzy';
			teacher = 'Kyle';

			const myTeacher = teacher;
			myTeacher = 'Suzy';

			const teachers = ['Kyle', 'Suzy'];
			teachers[1] = 'Brian'; //allowed
		}
		catch(err) {
			console.error(err);
		}
		
		/* eslint-enable no-unused-vars, no-const-assign */

		it('TODO: const', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
