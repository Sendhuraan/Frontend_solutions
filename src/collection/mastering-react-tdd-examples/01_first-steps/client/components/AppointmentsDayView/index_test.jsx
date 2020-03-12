import React from 'react';
import ReactDOM from 'react-dom';

import AppointmentsDayView from '../AppointmentsDayView';

(function() {

	describe('AppointmentsDayView', function() {

		let container;

		beforeEach(function() {
			container = document.createElement('div');
		});

		function renderComponent(component) {
			return ReactDOM.render(component, container);
		}

		it('renders a div with right ID', function() {
			renderComponent(<AppointmentsDayView appointments={[]} />);
			expect(container.querySelector('div#appointments-day-view')).not.toBeNull();
		});

		it('renders multiple appointments in an ordered list', function() {
			const appointments = [
				{
					text: 'Appointment1'
				},
				{
					text: 'Appointment1'
				}
			];

			renderComponent(<AppointmentsDayView appointments={ appointments } />);
			expect(container.querySelector('ol')).not.toBeNull();
			expect(container.querySelector('ol').children).toHaveLength(2);
		});
		
	});
	
})();
