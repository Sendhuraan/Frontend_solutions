(async function() {

	const inquirer = require('inquirer');
	const AWS = require('aws-sdk');
	AWS.config.update({
		region: 'ap-south-1'
	});

	var interactions = [
		{
			type: 'input',
			name: 'parameter_name',
			message: 'Enter Parameter Name : '
		}
	];

	const userInput = await inquirer.prompt(interactions);

	var params = {
		Name: `${userInput.parameter_name}`,
		WithDecryption: true
	};

	var ssm_service = new AWS.SSM({
		apiVersion: '2014-11-06'
	});

	var parameterDetails = await ssm_service.getParameter(params).promise();

	console.log(parameterDetails);
	
})();
