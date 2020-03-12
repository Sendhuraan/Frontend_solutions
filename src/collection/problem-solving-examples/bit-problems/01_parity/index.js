(async function() {

	const inquirer = require('inquirer');

	var BitUtils = require('@sendhuraan/js-utilities').BitUtils;

	var interactions = [
		{
			type: 'number',
			name: 'input_number',
			message: 'Enter number to check parity : '
		}
	];

	const userInput = await inquirer.prompt(interactions);
	var input = userInput.input_number;

	console.log(`Input in binary : ${input.toString(2)}`);
	console.log(`Number of setbits : ${BitUtils.countSetBits_shiftBits(input)}`);

	var parity = require('./solution').index.Parity;
	parity.init(input);

	console.log('Default (ObjLink)');
	console.log('============');
	console.log(`Default (xor) : ${parity.index()}`);

	process.stdout.write('\n');

	var Solution_byFunction = require('./solution').usingFunction.Parity;
	var parity_byFunction = new Solution_byFunction(input);

	console.log('Function');
	console.log('============');
	console.log(`Using shift bits : ${parity_byFunction.using_shiftBits()}`);
	console.log(`Using clear set bits : ${parity_byFunction.using_clearSetBits()}`);
	console.log(`Using lookup table : ${parity_byFunction.using_lookupTable()}`);
	console.log(`Using xor : ${parity_byFunction.using_xor()}`);
	console.log(`Default (xor) : ${parity_byFunction.index()}`);

	process.stdout.write('\n');

	var parity_byObjLink = require('./solution').usingObjLink.Parity;
	parity_byObjLink.init(input);

	console.log('ObjLink');
	console.log('============');
	console.log(`Using shift bits : ${parity_byObjLink.using_shiftBits()}`);
	console.log(`Using clear set bits : ${parity_byObjLink.using_clearSetBits()}`);
	console.log(`Using lookup table : ${parity_byObjLink.using_lookupTable()}`);
	console.log(`Using xor : ${parity_byObjLink.using_xor()}`);
	console.log(`Default (xor) : ${parity_byObjLink.index()}`);

	process.stdout.write('\n');

	var Solution_byClass = require('./solution').usingClass.Parity;
	var parity_byClass = new Solution_byClass(input);

	console.log('Class');
	console.log('============');
	console.log(`Using shift bits : ${parity_byClass.using_shiftBits()}`);
	console.log(`Using clear set bits : ${parity_byClass.using_clearSetBits()}`);
	console.log(`Using lookup table : ${parity_byClass.using_lookupTable()}`);
	console.log(`Using xor : ${parity_byClass.using_xor()}`);
	console.log(`Default (xor) : ${parity_byClass.index()}`);
	
})();




