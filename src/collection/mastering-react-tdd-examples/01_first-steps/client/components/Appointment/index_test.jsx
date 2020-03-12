import React from 'react';
import ReactDOM from 'react-dom';

import Appointment from '../Appointment';

(function() {

	describe('Appointment', function() {

		let customer;
		let container;

		beforeEach(function() {
			container = document.createElement('div');
		});

		function renderComponent(component) {
			return ReactDOM.render(component, container);
		}

		it('renders the customer first name', function() {
			customer = {
				'firstName': 'Ashley'
			};
			renderComponent(<Appointment customer={customer} />);
			expect(container.textContent).toMatch('Ashley');
		});

		it('renders another customer first name', function() {
			customer = {
				'firstName': 'Jordan'
			};
			renderComponent(<Appointment customer={customer} />);
			expect(container.textContent).toMatch('Jordan');
		});


	});
	
})();
