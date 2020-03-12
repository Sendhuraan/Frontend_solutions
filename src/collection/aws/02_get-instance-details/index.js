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
		InstanceIds: [`${userInput.instance_id}`]
	};

	var ec2_service = new AWS.EC2({
		apiVersion: '2016-11-15'
	});

	var instanceDetails = await ec2_service.describeInstances(params).promise();

	instanceDetails.Reservations[0].Instances.map(function(instance) {
		console.log(instance);
	});
	
})();
