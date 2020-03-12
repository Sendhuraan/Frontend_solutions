'use strict';

(function() {

	var nullFunction = function(){};

	describe('Abstract Operations', function() {

		it('Internally in Javascript, Whenever there is need for coercion, the abstract methods are dispatched to do the coercion. The following are some methods.', nullFunction);

		it(`ToString
			ToNumber
			ToBoolean
		`, nullFunction);

		it('It is important to note that, these methods are different from methods like toString (lowercase). Instead of getting into details like how these methods work, we can focus on what is end result of calling such abstract operations.', nullFunction);

		describe('ToString', function() {

			it('ToString method converts the given value to a string primitive. The following are some end results during the conversion.', nullFunction);

			describe('ToString on Primitives', function() {

				it(`null 		-> 	'null'
					undefined 	-> 	'undefined'
					true 		-> 	'true'
					false 		-> 	'false'
					3.1459 		-> 	'3.1459'
					0 			-> 	'0'
					-0 			-> 	'0'
				`, nullFunction);

				it('It is important to note that (-0) becomes (\'0\') because it internally tries to hide the fact that there is no negative zero.', nullFunction);
				
			});

			describe('ToString on Non-Primitives', function() {

				it('ToString method when called on a non-primitive, dispatches the default toString method on the object or toString method which was defined by us.', nullFunction);

				it('When called on array or object, it calls ToPrimitive to convert the object into a primitive, and then it calls ToString abstract operation.', nullFunction);

				describe('ToPrimitive', function() {

					it(`When ToPrimitive is called on an object, the following methods are called in the specific order,
							1. toString()
							2. valueOf()

						If the first method does not return a primitive, then it calls the second method.
					`, nullFunction);
					
				});

				it('The following are some of the conversions in the default toString method when called on arrays.', nullFunction);

				it(`[] 					-> 	''
					[1,2,3] 			-> 	'1,2,3'
					[null, undefined] 	-> 	','
					[ [ [],[],[] ], [] ]-> 	',,,'
					[,,,,] 				-> 	',,,'
				`, nullFunction);

				it('It is counter-intuitive for us to think that [] becomes \'\'. We do not know if that came from empty string or array. It could have become \'[]\' string with array symbol, but it does not. Similarly array with [1,2,3] becomes \'1,2,3\', which could have become \'[1,2,3]\' with the square brackets, but it does not (weird but important!)', nullFunction);

				it('More importantly, when null & undefined are individually stringified, it becomes \'null\' & \'undefined\', but when in an array, it becomes \',\' (weird!)', nullFunction);

				it('In Arrays, trailing commas are allowed, hence [,,,,] becomes \',,,\'', nullFunction);

				it('The following are some of the conversions in the default toString method when called on objects.', nullFunction);

				it(`{}		-> 	'[object Object]'
					{a:2} 	-> 	'[object Object]'
				`, nullFunction);

				it('During conversion, the contents of the objects are not shown.', nullFunction);

				it('The Object (uppercase) can be changed using ES6 meta programming, Refer ES6 Right parts course for more information.', nullFunction);
				
			});
			
			
		});


		describe('ToNumber', function() {

			it('ToNumber method converts the given value to a number primitive. The following are some end results during the conversion.', nullFunction);

			describe('ToNumber on string primitive', function() {

				it(`'' 		-> 	0
					'0' 		-> 	0
					'-0' 		-> 	-0
					'  009  ' 	-> 	9
					'3.1459' 	-> 	3.1459
					'0.' 		-> 	0
					'.0' 		-> 	0
					'.' 		-> 	NaN
					'0xaf' 		-> 	175
				`, nullFunction);

				it('Refer JS Deep Foundations course for more information.', nullFunction);
				
			});

			describe('ToNumber on boolean, null, undefined', function() {

				it(`false 		-> 	0
					true 		-> 	1
					null 		-> 	0
					undefined 	-> 	NaN
				`, nullFunction);

				it('Refer JS Deep Foundations course for more information.', nullFunction);
				
			});

			describe('ToNumber on array or object', function() {

				it('When called on array or object, it calls ToPrimitive to convert the object into a primitive, and then it calls ToNumber abstract operation.', nullFunction);

				describe('ToPrimitive', function() {

					it(`When ToPrimitive is called on an object, the following methods are called in the specific order,
							1. valueOf()
							2. toString()

						If the first method does not return a primitive, then it calls the second method.
					`, nullFunction);
					
				});

				it('The following are some of the conversions for arrays by ToNumber abstract operation', nullFunction);

				it(`[''] 		-> 	0
					['0'] 		-> 	0
					['-0'] 		-> 	-0
					[null] 		-> 	0
					[undefined] -> 	0
					[1,2,3] 	-> 	NaN
					[[[[]]]] 	-> 	0
				`, nullFunction);

				it('Refer JS Deep Foundations course for more information.', nullFunction);
				
			});
			
		});

		describe('ToBoolean', function() {

			it('ToBoolean method converts the given value to a boolean primitive. To understand what ToBoolean does, we need to understand truthy and falsy values.', nullFunction);

			it(`When ToBoolean abstract operation is called, the following values results in false boolean primitive
				'', "", \`\`
				0, +0, -0
				null
				NaN
				false
				undefined
			`, nullFunction);

			it('All the OTHER values except the above values converts to true boolean primitive, when ToBoolean abstract operation is called. So If we need to know whether something is truthy, check it in the falsy list, If it is not there - then it is truthy', nullFunction);

			
		});
		
	});
	
})();
