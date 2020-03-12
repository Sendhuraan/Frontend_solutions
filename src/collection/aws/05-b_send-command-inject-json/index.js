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

	var injectParams = {
		env: {
			server: {
				port: 3000,
				serveDir: 'dist'
			},
			db: {
				connectionString: 'mongodb://cloudUser:cloudPass@localhost:8089/mongodb-cookbook-examples_01_inserting-records_users'
			}
		}
	};

	var commands = [
		'cd /var',
		'touch env.json',
		'APP_PARAMS=calc:{env}',
		'echo $APP_PARAMS > env.json'
	];

	var paramResolvedCommand = commands.map(function(command) {
		var injectParamPattern = /(calc:{)(\w+)(})/;

		if(injectParamPattern.test(command)) {
			var injectParamName = command.match(injectParamPattern)[2];
			var injectParamResolved = `"${JSON.stringify(injectParams[injectParamName]).replace(/"/g, '\\"')}"`;
			command = command.replace(injectParamPattern, injectParamResolved);
			console.log(command);
		}

		return command;
	});

	console.log(paramResolvedCommand);

	var params = {
		DocumentName: 'AWS-RunShellScript',
		InstanceIds: [`${userInput.instance_id}`],
		Parameters: {
			commands: paramResolvedCommand
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
