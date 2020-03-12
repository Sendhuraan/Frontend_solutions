(async function() {

	const inquirer = require('inquirer');
	const AWS = require('aws-sdk');
	AWS.config.update({
		region: 'ap-south-1'
	});

	var interactions = [
		{
			type: 'input',
			name: 'instance_id',
			message: 'Enter Instance ID : '
		}
	];

	const userInput = await inquirer.prompt(interactions);

	var params = {
		DocumentName: 'AWS-RunShellScript',
		InstanceIds: [`${userInput.instance_id}`],
		Parameters: {
			commands: [
				'cd /var',
				'sudo mkdir www',
				'cd /var/www',
				'sudo mkdir JS_solutions'
			]
		}
	};

	var ssm_service = new AWS.SSM({
		apiVersion: '2014-11-06'
	});

	try {
		var sendCommand_Response = await ssm_service.sendCommand(params).promise();	
	}
	catch(error) {
		console.log(error.message);
	}
	finally {
		if(sendCommand_Response) {
			console.log(`Command (ID : ${sendCommand_Response.Command.CommandId}) executed  successfully`);
		}
		else {
			console.log('Command did not execute properly. Please check the parameters and try again');
		}
	}
	
	
})();
