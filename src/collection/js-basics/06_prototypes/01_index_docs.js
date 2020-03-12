'use strict';

(function() {

	var nullFunction = function() {};

	describe('Prototype as class', function() {

		function Workshop(teacher) {
			this.teacher = teacher;
		}

		Workshop.prototype.ask = function(question) {
			console.log(this.teacher, question);
		};

		var deepJS = new Workshop('Kyle');
		var reactJS = new Workshop('Suzy');

		deepJS.ask('Is \'prototype\' a class?');
		reactJS.ask('Isn\'t \'prototype\' ugly?');

		it('Prototype as class', nullFunction);

	});
	
})();
