'use strict';

(function() {

	var assert = require('chai').assert;
	var { check } = require('./03_implement-object-is');

	describe('check is', function() {

		it('check for all possible corner cases', function() {

			assert.equal(check.is(42, 42), true);
			assert.equal(check.is('foo', 'foo'), true);
			assert.equal(check.is(false, false), true);
			assert.equal(check.is(null, null), true);
			assert.equal(check.is(undefined, undefined), true);
			assert.equal(check.is(NaN, NaN), true);
			assert.equal(check.is(-0, -0), true);
			assert.equal(check.is(0, 0), true);

			assert.equal(check.is(-0, 0), false);
			assert.equal(check.is(0, -0), false);
			assert.equal(check.is(0, NaN), false);
			assert.equal(check.is(NaN, 0), false);
			assert.equal(check.is(42, '42'), false);
			assert.equal(check.is('42', 42), false);
			assert.equal(check.is('foo', 'bar'), false);
			assert.equal(check.is(false, true), false);
			assert.equal(check.is(null, undefined), false);
			assert.equal(check.is(undefined, null), false);
			
		});

	});
	
})();
