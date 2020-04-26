import { of, from, fromEvent, merge, interval } from 'rxjs';
import {
	map,
	takeUntil,
	take,
	concatAll,
	mergeMap,
	switchMap,
	skip
} from 'rxjs/operators';
import * as R from 'ramda';
import * as $ from 'jquery';

import './index.scss';

// Pure functions
const increment = R.add(1);

const listItems = x => `<li>${x}</li>`;

var setHtml = R.curry(function(sel, x) {
	return $(sel).html(x);
});

var appendHtml = R.curry(function(sel, x) {
	return $(sel).append(x);
});

// Observable from Promise
const fortyTwo = new Promise(resolve => {
	setTimeout(() => {
		resolve(42);
	}, 5000);
});

from(fortyTwo)
	.pipe(map(increment))
	.subscribe(console.log);

// Append keycodes from input box keypress event
const keyCodeInput = document.querySelector('[data-keycode-input]');
const keyCodeCloseBtn = document.querySelector('[data-keycode-close-btn]');

const keypresses = fromEvent(keyCodeInput, 'keypress');
const keyCodeClose = fromEvent(keyCodeCloseBtn, 'click');

const keyCodes = keypresses
	.pipe(takeUntil(keyCodeClose))
	.pipe(map(event => event.keyCode));

keyCodes.subscribe(function(keyCode) {
	let setResults = R.compose(appendHtml('[data-keycode-results]'), listItems);
	setResults(keyCode);
});

// Merge
const source1 = of(1, 2, 3);
const source2 = of('a', 'b', 'c');

merge(source1, source2).subscribe(console.log);

// concatAll - Co-ordinating responses in the order they appear.
const concatContainer = document.querySelector('[data-concat-container]');

const concatContainerClicks = fromEvent(concatContainer, 'click');
const concatIntervals = concatContainerClicks.pipe(
	map(() =>
		interval(300)
			.pipe(skip(1))
			.pipe(take(5))
	)
);

const concatedIntervals = concatIntervals.pipe(concatAll());

concatedIntervals.subscribe(function(value) {
	let setResults = R.compose(appendHtml('[data-concat-results]'), listItems);
	setResults(value);
});

// mergeMap - Combines response as soon as they come in.
const mergeContainer = document.querySelector('[data-merge-container]');

const mergeContainerClicks = fromEvent(mergeContainer, 'click');
const mergedIntervals = mergeContainerClicks.pipe(
	mergeMap(() =>
		interval(300)
			.pipe(skip(1))
			.pipe(take(5))
	)
);

mergedIntervals.subscribe(function(value) {
	let setResults = R.compose(appendHtml('[data-merge-results]'), listItems);
	setResults(value);
});

// switchLatest - switches to the latest stream of data.
// As soon as we click on different spot, it starts again, rejecting all previous streams.
const switchContainer = document.querySelector('[data-switch-container]');

const switchContainerClicks = fromEvent(switchContainer, 'click');
const switchedIntervals = switchContainerClicks.pipe(
	switchMap(() =>
		interval(300)
			.pipe(skip(1))
			.pipe(take(5))
	)
);

switchedIntervals.subscribe(function(value) {
	let setResults = R.compose(appendHtml('[data-switch-results]'), listItems);
	setResults(value);
});
