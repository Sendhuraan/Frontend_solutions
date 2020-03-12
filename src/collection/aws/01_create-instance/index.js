(async function() {

	const inquirer = require('inquirer');
	const AWS = require('aws-sdk');

	AWS.config.update({
		region: 'ap-south-1'
	});

	var interactions = [
		{
			type: 'input',
			name: 'security_group_id',
			message: 'Enter Security Group ID : '
		}
	];

	const userInput = await inquirer.prompt(interactions);

	var instanceParams = {
		ImageId: 'ami-0889b8a448de4fc44', 
		InstanceType: 't2.micro',
		KeyName: 'Sendhuraan-key-pair-ap-mumbai',
		MinCount: 1,
		MaxCount: 1,
		SecurityGroupIds: [
			`${userInput.security_group_id}`
		],
		IamInstanceProfile: {
			Name: 'JS_solutions_admin'
		},
		TagSpecifications: [
			{
				ResourceType: 'instance',
				Tags: [
					{
						Key: 'Name',
						Value: 'Node JS App Server'
					},
					{
						Key: 'Environment',
						Value: 'Stage'
					}
				]
			}
		]
	};

	var ec2_service = new AWS.EC2({
		apiVersion: '2016-11-15'
	});

	var ec2_instances = await ec2_service.runInstances(instanceParams).promise();

	ec2_instances.Instances.map(function(instance) {
		console.log(`Instance (ID: ${instance.InstanceId}) Created`);
	});
	
})();




