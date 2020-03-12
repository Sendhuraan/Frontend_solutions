import path from 'path';

function greet(name) {
	console.log(`Hello ${name}`);
}

function introduction(firstname, lastname, callback) {
	const name = `${firstname} ${lastname}`;

	callback(name);
}

introduction('Sendhuraan', 'NKK', greet);

console.log(path.join(__dirname, __filename));

