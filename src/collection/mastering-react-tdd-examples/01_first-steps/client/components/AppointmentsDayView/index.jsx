import React from 'react';

function AppointmentsDayView(props) {
	return (
		<div id='appointments-day-view'>
			<ol>
					{
						props.appointments.map(function(appointment) {
							return (
							<li>{appointment.startsAt}</li>
							);
						})
					}
			</ol>
		</div>
	);
}

export default AppointmentsDayView;
