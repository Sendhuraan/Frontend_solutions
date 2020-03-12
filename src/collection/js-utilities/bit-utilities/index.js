/* eslint-disable no-bitwise */

(function() {

	function convertToBinary(x) {
		return x.toString(2);
	}

	function clearLowestSetBit(x) {
		return x & (x - 1);
	}

	function extractLowestSetBit(x) {
		return x & ~(x - 1);
	}

	function getLSB(x) {
		return x & 1;
	}

	function shiftBitRight(x, numOfBitsToShift) {
		return x >>> numOfBitsToShift;
	}

	function countSetBits_shiftBits(x) {
		var result = 0;

		while(x) {

			if(getLSB(x) === 1) {
				result++;
			}

			x = shiftBitRight(x, 1);

		}

		return result;
	}

	function countSetBits_clearSetBits(x) {
		var result = 0;

		while(x) {
			x = clearLowestSetBit(x);
			result++;
		}

		return result;
	}

	function swapBits(x, positionA, positionB) {

		var positionA_mask = 1 << positionA - 1;
		var positionB_mask = 1 << positionB - 1;

		var bit_positionA = x & positionA_mask;
		var bit_positionB = x & positionB_mask;

		var isSwapNeeded = bit_positionA !== bit_positionB;

		if(isSwapNeeded) {
			var swapMask = positionA_mask | positionB_mask;
			x = x ^ swapMask;
		}

		return x;

	}

	var publicAPI = {
		convertToBinary,
		clearLowestSetBit,
		extractLowestSetBit,
		getLSB,
		shiftBitRight,
		countSetBits_shiftBits,
		countSetBits_clearSetBits,
		swapBits
	};

	module.exports = publicAPI;

})();
