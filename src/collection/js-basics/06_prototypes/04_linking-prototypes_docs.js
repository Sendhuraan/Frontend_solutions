'use strict';

(function() {

	var nullFunction = function() {};

	describe('Linking prototypes (Object.create)', function() {

		function Workshop(teacher) {
			this.teacher = teacher;
		}

		Workshop.prototype.ask = function(question) {
			console.log(this.teacher, question);
		};

		function AnotherWorkshop(teacher) {
			Workshop.call(this, teacher);
		}

		AnotherWorkshop.prototype = Object.create(Workshop.prototype);

		// different method. Not overriding the ask function. But inside we call the ask function via prototype linkage.
		AnotherWorkshop.prototype.speakup = function(msg) {
			this.ask(msg.toUpperCase());
		};

		var JSRecentParts = new AnotherWorkshop('Kyle');

		JSRecentParts.speakup('Is this actually inheritance');


		it('TODO: Linking prototypes (Object.create)', nullFunction);

	});
	
})();
