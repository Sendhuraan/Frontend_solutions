import React, { Component } from 'react';

import './index.css';

class Card extends Component {

	constructor(props) {
		super(props);

		this.state = {
			firstName: 'Sendhuraan',
			initials: 'SN',
			info: [
				{
					title: 'Birthday',
					text: '01 Oct 1990'
				},
				{
					title: 'Address',
					text: '123 Fulton St.'
				},
				{
					title: 'Phone',
					text: '212-234-5678'
				}
			]
		};
	}
	render() {

		const { firstName, initials, info} = this.state;

		return (
			<React.Fragment>
				<section className='card-container'>
					<header className='card-header'>
						<span initials={initials}></span>
						<h2>{firstName}</h2>
					</header>

					<main>
						<ul>
							{
								info.map(function(value, index) {
									return (
										<li key={index}>
											<span className='details-heading'>
												{value.title}
											</span>
											<span className='details-content'>
												{value.text ? value.text : 'n/a'}
											</span>
										</li>
									);
								})
							}
						</ul>
					</main>
				</section>
			</React.Fragment>
		);
	}
}

export default Card;
