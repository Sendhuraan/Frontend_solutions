(function() {

	var assert = require('chai').assert;
	var { CountSheep } = require('./solution');

	describe('Count Sheep', function() {

		describe('Default(Index) Solution', function() {

			it('should return count of true values in given array', function() {
				var arr = [true, true, false];

				var countSheep = new CountSheep(arr);
				assert.equal(countSheep.index(), 2);
			});
			
		});

	});
	
})();
