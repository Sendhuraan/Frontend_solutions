import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as R from 'ramda';

var nullFunction = function() {};

describe('Primitive Types', function() {
	const increment = R.add(1);

	it('Hello', function() {
		const fortyTwo = new Promise(resolve => {
			setTimeout(() => {
				resolve(42);
			}, 5000);
		});

		const sampleArray = [1, 2, 3];

		const result = from(sampleArray)
			.pipe(map(increment))
			.subscribe(R.identity);

		console.log(result);
	});
});
