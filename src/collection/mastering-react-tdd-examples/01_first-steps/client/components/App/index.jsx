import React, { Component, Fragment } from 'react';

import Appointment from '../Appointment';
import AppointmentsDayView from '../AppointmentsDayView';

import './index.css';

class App extends Component {
	render() {
		const today = new Date();
		const appointments = [
			{
				startsAt: today.setHours(12, 0)
			},
			{
				startsAt: today.setHours(13, 0)
			}
		];

		const customer = {
			'firstName': 'Ashley'
		};

		return (
			<Fragment>
				<Appointment customer={customer} />
				<AppointmentsDayView appointments={ appointments } />
			</Fragment>
		);
	}
}

export default App;
