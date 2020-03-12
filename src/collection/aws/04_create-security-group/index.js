(async function() {

	var AWS = require('aws-sdk');

	AWS.config.update({
		region: 'ap-south-1'
	});

	var ec2_service = new AWS.EC2({
		apiVersion: '2016-11-15'
	});

	var describeVpcs_Response = await ec2_service.describeVpcs().promise();

	var paramsSecurityGroup = {
		Description: 'Security Group for JS_solutions',
		GroupName: 'JS_solutions_security-group',
		VpcId: describeVpcs_Response.Vpcs[0].VpcId
	};

	var createSecurityGroup_Response = await ec2_service.createSecurityGroup(paramsSecurityGroup).promise();

	console.log(`Security Group (${createSecurityGroup_Response.GroupId}) Created!`);

	var paramsIngress = {
		GroupId: createSecurityGroup_Response.GroupId,
		IpPermissions:[
			{
				IpProtocol: 'tcp',
				FromPort: 3000,
				ToPort: 3000,
				IpRanges: [
					{
						'CidrIp': '0.0.0.0/0'
					}
				]
			},
			{
				IpProtocol: 'tcp',
				FromPort: 22,
				ToPort: 22,
				IpRanges: [
					{
						'CidrIp': '0.0.0.0/0'
					}
				]
			}
		]
	};

	var securityGroup = await ec2_service.authorizeSecurityGroupIngress(paramsIngress).promise();

	console.log('Rules Added to Security Group');
	
})();
