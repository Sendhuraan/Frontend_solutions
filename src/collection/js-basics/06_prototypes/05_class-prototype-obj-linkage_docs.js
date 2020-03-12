'use strict';

(function() {

	var nullFunction = function() {};

	describe('Achieving Reusuability', function() {

		it('We can achieve reusuability of functions and objects via three methods. Basically, we are trying to link the objects by a chain and this is fundamentally not a copy operation but a linkage mechanism (Important)', nullFunction);

		it('class', nullFunction);
		it('prototype linkage', nullFunction);
		it('object linkage', nullFunction);
	});

	describe('Objects Linked (class)', function() {

		class Workshop {
			constructor(teacher) {
				this.teacher = teacher;
			}
			ask(question) {
				console.log(this.teacher, question);
			}
		}

		class AnotherWorkshop extends Workshop {
			speakUp(msg) {
				this.ask(msg);
			}
		}

		var JSRecentParts = new AnotherWorkshop('Kyle');

		JSRecentParts.speakUp('Are classes getting better?');

		it('TODO: Objects Linked (class)', nullFunction);

	});

	describe('Objects Linked (prototype chain)', function() {

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
		AnotherWorkshop.prototype.speakUp = function(msg) {
			this.ask(msg.toUpperCase());
		};

		var JSRecentParts = new AnotherWorkshop('Kyle');

		JSRecentParts.speakUp('Isn\'t this ugly');

		it('TODO: Objects Linked (prototype chain)', nullFunction);

	});


	describe('Objects Linked (direct Object.create method)', function() {

		var Workshop = {
			setTeacher(teacher) {
				this.teacher = teacher;
			},
			ask(question) {
				console.log(this.teacher, question);
			}
		};

		var AnotherWorkshop = Object.create(Workshop);

		AnotherWorkshop.speakUp = function(msg) {
			this.ask(msg.toUpperCase());
		};

		var JSRecentParts = Object.create(AnotherWorkshop);
		JSRecentParts.setTeacher('Kyle');
		JSRecentParts.speakUp('But isn\'t this cleaner?');

		it('TODO: Objects Linked (direct Object.create method)', nullFunction);

	});
	
})();
