'use strict';

(function() {

	const { performance } = require('perf_hooks');
	const inquirer = require('inquirer');

	var SinglyLinkedList = require('@sendhuraan/js-utilities').DataStructures.LinkedList.Singly.usingFunction.Singly;
	var inputList = new SinglyLinkedList();

	inputList.push(10);
	inputList.push(30);
	inputList.push(50);
	inputList.push(70);
	inputList.push(90);


	var reverseList = require('./solution').index.ReverseLinkedList;
	reverseList.init(inputList);

	console.log('Default (ObjLink)');
	console.log('============');
	console.log(`Default (using reverse links) : ${JSON.stringify(reverseList.index(), null, 4)}`);

	process.stdout.write('\n');


	var Solution_byFunction = require('./solution').usingFunction.ReverseLinkedList;
	var reverseList_byFunction = new Solution_byFunction(inputList);

	console.log('Function');
	console.log('============');
	console.log(`Using pop push : ${JSON.stringify(reverseList_byFunction.using_popPush(), null, 4)}`);

	process.stdout.write('\n');


	var reverseList_byObjLink = require('./solution').usingObjLink.ReverseLinkedList;
	reverseList_byObjLink.init(inputList);

	console.log('ObjLink');
	console.log('============');
	console.log(`Using pop push : ${JSON.stringify(reverseList_byObjLink.using_popPush(), null, 4)}`);

	process.stdout.write('\n');


	var Solution_byClass = require('./solution').usingClass.ReverseLinkedList;
	var reverseList_byClass = new Solution_byClass(inputList);

	console.log('Class');
	console.log('============');
	console.log(`Using pop push : ${JSON.stringify(reverseList_byClass.using_popPush(), null, 4)}`);
	
})();




