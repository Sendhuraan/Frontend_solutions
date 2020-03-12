## Understand the problem
* Restate problem
* Input(s)
* Input(s) Type
* Output
* Output Type
* Determine output from input
* Label important data

## Explore concrete examples
* simple examples
```
countSheep([true, false, true])
// returns 2

countSheep([true, null,
			true, undefined]
		)
// returns 2
```

* complex examples
```
countSheep(['true', false,
			true, true]
		)
// returns 2

countSheep([true, null,
			true, '$((()*&&']
		)
// returns 2
```

* examples with empty input(s)
```
>> TODO

countSheep([])
// returns 0

countSheep([''])
// returns 0
```

* examples with invalid input(s)
```
>> TODO

countSheep()
// returns error: Input should be array

countSheep({'value': 'false'})
// returns error: Input should be array
```

## Break it down
```
function countSheep() {
	// Make new result and init to zero

	// Loop over string, foreach value,
		// if the value is true, increment the result by 1.
		// if the value is anything else, do nothing.

	// Return result
}
```

## Solve it / Simplify

## Look back and Refactor
* Can result be tested
* Derive result differently
* Improve readability
* Use output as input
* Improve performance
* Other ways to refactor
* Other people solutions
