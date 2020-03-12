'use strict';

(function() {

	var nullFunction = function() {};

	describe('__proto__ linkage', function() {

		/* eslint-disable no-proto */
		function Workshop(teacher) {
			this.teacher = teacher;
		}

		Workshop.prototype.ask = function(question) {
			console.log(this.teacher, question);
		};

		var deepJS = new Workshop('Kyle');
		
		console.log(deepJS.constructor === Workshop);

		console.log(deepJS.__proto__ === Workshop.prototype);
		console.log(Object.getPrototypeOf(deepJS) === Workshop.prototype);

		/* eslint-enable no-proto */

		it('__proto__ gives the prototype linkage, which takes us up one level in the prototype chain.', nullFunction);

	});
	
})();
