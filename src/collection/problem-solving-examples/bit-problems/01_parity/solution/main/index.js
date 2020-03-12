/* eslint-disable no-bitwise */

(function() {

	var BitUtils = require('@sendhuraan/js-utilities').BitUtils;

	var Utils = require('./utilities');

	function using_shiftBits(x = this.input) {
		var result = 0;
		
		while(x) {
			result = result ^ BitUtils.getLSB(x);
			x = BitUtils.shiftBitRight(x, 1);
		}

		return result;
	}

	function using_clearSetBits(x = this.input) {
		var result = 0;
		
		while(x) {
			result = result ^ 1;
			x = BitUtils.clearLowestSetBit(x);
		}

		return result;
	}

	function using_lookupTable(x = this.input) {
		var precomputedParity = this.buildTable();

		var WORD_SIZE = 8;
		var BITMASK = 0xFF;

		return ( 
			precomputedParity[x >>> (3 * WORD_SIZE)] ^
			precomputedParity[(x >>> (2 * WORD_SIZE)) & BITMASK] ^
			precomputedParity[(x >>> WORD_SIZE) & BITMASK] ^
			precomputedParity[x & BITMASK]
		);
	}

	function using_xor(x = this.input) {
		x = x ^ (x >>> 16);
		x = x ^ (x >>> 8);
		x = x ^ (x >>> 4);
		x = x ^ (x >>> 2);
		x = x ^ (x >>> 1);

		return x & 1;
	}

	const index = using_xor;

	var solution = Object.create(Utils);

	solution.using_shiftBits = using_shiftBits;
	solution.using_clearSetBits = using_clearSetBits;
	solution.using_lookupTable = using_lookupTable;
	solution.using_xor = using_xor;
	solution.index = index;

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
