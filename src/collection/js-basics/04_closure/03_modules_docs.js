'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function() {};

	describe('Namespace - Not a module', function() {

		var workshop = {
			teacher: 'Kyle',
			ask(question) {
				console.log(this.teacher, question);
			}
		};

		workshop.ask('Is this a module?');

		it('TODO Namespace - Not a module', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('Classic/Revealing Module pattern', function() {

		var workshop = (function Module(teacher) {
			function ask(question) {
				console.log(teacher, question);
			}

			var publicAPI = {
				ask
			};

			return publicAPI;
			
		})('Kyle');

		workshop.ask('It\'s a module right?');

		it('TODO Classic/Revealing Module pattern', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('Module Factory', function() {

		/* eslint-disable new-cap */
		function WorkshopModule(teacher) {
			function ask(question) {
				console.log(teacher, question);
			}

			var publicAPI = {
				ask
			};

			return publicAPI;
			
		}

		var workshop = WorkshopModule('Kyle');
		workshop.ask('It\'s a module right?');

		/* eslint-enable new-cap */
		
		it('TODO: Module Factory', nullFunction);

	});
	
})();
