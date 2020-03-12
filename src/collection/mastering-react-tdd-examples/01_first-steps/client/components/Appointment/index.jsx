import React from 'react';

function Appointment(props) {

	const { customer } = props;
	const { firstName } = customer;

	return (
		<div>{firstName}</div>
	);
}

export default Appointment;
