'use strict';

(function() {

	var nullFunction = function() {};

	describe('Task delay example', function() {

		it('TODO: Task delay example', nullFunction);

	});

	describe('Task delay (callback - sequential request)', function() {

		function output(message) {
			console.log(message);
		}

		function doAsyncWork(task, delay, cb) {
			console.log(`${task} started`);
			console.log(`Delay: ${delay / 1000} seconds`);

			setTimeout(function() {
				var data = `${task} completed`;
				cb(data);
			}, delay);
		}

		doAsyncWork('task1', 2000, function(data) {
			output(data);

			doAsyncWork('task2', 1000, function(data) {
				output(data);
				output('complete!');
			});

		});

		it('TODO: Task delay (callback - sequential request)', nullFunction);

	});


	describe('Task delay (callback - parallel request)', function() {

		function output(message) {
			console.log(message);
		}

		function doAsyncWork(task, delay, cb) {
			console.log(`${task} started`);
			console.log(`Delay: ${delay / 1000} seconds`);

			setTimeout(function() {
				var data = `${task} completed`;
				cb(data);
			}, delay);

		}

		function doTask(taskName, delay) {
			doAsyncWork(taskName, delay, function(response) {
				getData(taskName, response);
			});
		}

		var responses = {};

		function getData(name, data) {

			let taskInfo = {
				data: data,
				printed: false
			};
			
			if(!responses[name]) {
				responses[name] = taskInfo;
			}

			var tasks = ['task1', 'task2'];

			for(let i=0; i < tasks.length; i++) {
				if(tasks[i] in responses) {
					if(responses[tasks[i]]['printed'] !== true) {
						output(responses[tasks[i]]['data']);
						responses[tasks[i]]['printed'] = true;
					}
				}
				else {
					return false;
				}
			}

			output('complete!');
			
		}

		doTask('task1', 2000);
		doTask('task2', 1000);

		it('TODO: Task delay (callback - parallel request)', nullFunction);

	});


	describe('Task delay (thunk - parallel request)', function() {

		function output(message) {
			console.log(message);
		}

		function doAsyncWork(task, delay) {
			console.log(`${task} started`);
			console.log(`Delay: ${delay / 1000} seconds`);

			var data, fn;

			setTimeout(function() {
				data = `${task} completed`;

				if(fn) {
					fn(data);
				}
			}, delay);

			return function(cb) {
				if(data) {
					cb(data);
				}
				else {
					fn = cb;
				}
			};

		}

		var task1 = doAsyncWork('task1', 5000);
		var task2 = doAsyncWork('task2', 1000);

		task1(function(data) {
			output(data);

			task2(function(data) {
				output(data);
			});

			output('complete!');
		});

		it('TODO: Task delay (thunk - parallel request)', nullFunction);

	});


	describe('Task delay (promise - parallel request)', function() {

		/* eslint-disable no-unused-vars */
		function output(message) {
			console.log(message);
		}

		function doAsyncWork(task, delay, cb) {
			console.log(`${task} started`);
			console.log(`Delay: ${delay / 1000} seconds`);

			setTimeout(function() {
				var data = `${task} completed`;
				cb(data);
			}, delay);
		}

		function doTask(taskName, delay) {
			return new Promise(function(resolve, reject) {
				doAsyncWork(taskName, delay, resolve);
			});
		}

		var task1_promise = doTask('task1', 5000);
		var task2_promise = doTask('task2', 1000);

		task1_promise
		.then(output)
		.then(function() {
			return task2_promise;
		})
		.then(output)
		.then(function() {
			output('complete!');
		});

		/* eslint-enable no-unused-vars */

		it('TODO: Task delay (promise - parallel request)', nullFunction);

	});


	describe('Task delay (dynamic promise for dynamic tasks - parallel request)', function() {

		/* eslint-disable no-unused-vars */
		function output(message) {
			console.log(message);
		}

		function doAsyncWork(task, delay, cb) {
			console.log(`${task} started`);
			console.log(`Delay: ${delay / 1000} seconds`);

			setTimeout(function() {
				var data = `${task} completed`;
				cb(data);
			}, delay);
		}

		function doTask(taskName, delay) {
			return new Promise(function(resolve, reject) {
				doAsyncWork(taskName, delay, resolve);
			});
		}

		var tasksLists = [
			{
				name: 'task1',
				delay: 5000
			},
			{
				name: 'task2',
				delay: 2500
			},
			{
				name: 'task3',
				delay: 3000
			}
		];

		tasksLists
		.map(function(task) {
			return doTask(task.name, task.delay);
		})
		.reduce(function combine(chain, currentPromise) {
			return chain.then(function() {
				return currentPromise;
			})
			.then(output);
		}, Promise.resolve())
		.then(function() {
			output('complete!');
		});

		/* eslint-enable no-unused-vars */

		it('TODO: Task delay (dynamic promise for dynamic tasks - parallel request)', nullFunction);

	});
	

	describe('Task delay (generator - parallel request)', function() {

		/* eslint-disable no-unused-vars */
		function output(message) {
			console.log(message);
		}

		function doAsyncWork(task, delay, cb) {
			console.log(`${task} started`);
			console.log(`Delay: ${delay / 1000} seconds`);

			setTimeout(function() {
				var data = `${task} completed`;
				cb(data);
			}, delay);
		}

		function doTask(taskName, delay) {
			return new Promise(function(resolve, reject) {
				doAsyncWork(taskName, delay, resolve);
			});
		}

		function runGenerator(g) {
			var it = g(), ret;

			// asynchronously iterate over generator
			(function iterate(val){
				ret = it.next( val );

				if (!ret.done) {
					// poor man's "is it a promise?" test
					if ('then' in ret.value) {
						// wait on the promise
						ret.value.then( iterate );
					}
					// immediate value: just send right back in
					else {
						// avoid synchronous recursion
						setTimeout( function(){
							iterate( ret.value );
						}, 0 );
					}
				}
			})();
		}

		runGenerator(function* taskSequence() {
			var task1_promise = doTask('task1', 5000);
			var task2_promise = doTask('task2', 1000);

			output(yield task1_promise);
			output(yield task2_promise);

			output('complete!');
		});

		/* eslint-enable no-unused-vars */

		it('TODO: Task delay (generator - parallel request)', nullFunction);

	});


	describe('Task delay (async await - parallel request)', function() {

		/* eslint-disable no-unused-vars */
		function output(message) {
			console.log(message);
		}

		function doAsyncWork(task, delay, cb) {
			console.log(`${task} started`);
			console.log(`Delay: ${delay / 1000} seconds`);

			setTimeout(function() {
				var data = `${task} completed`;
				cb(data);
			}, delay);
		}

		function doTask(taskName, delay) {
			return new Promise(function(resolve, reject) {
				doAsyncWork(taskName, delay, resolve);
			});
		}

		async function taskSequence() {
			var task1_promise = doTask('task1', 5000);
			var task2_promise = doTask('task2', 1000);

			output(await task1_promise);
			output(await task2_promise);

			output('complete!');
		}

		(async function() {
			await taskSequence();
		})();

		/* eslint-enable no-unused-vars */

		it('TODO: Task delay (async await - parallel request)', nullFunction);

	});

})();
