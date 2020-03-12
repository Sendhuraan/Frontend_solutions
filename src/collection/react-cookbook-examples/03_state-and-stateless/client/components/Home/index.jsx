import React, { Component } from 'react';

import './index.css';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			name: 'Sendhuraan'
		};
	}

	// This function will execute once the component has mounted in DOM.
	componentDidMount() {

		// This has to be an arrow function, as `this` inside arrow fn binds lexically.
		// Using normal function would throw error : this.setState is not a function.
		setTimeout(() => {
			this.setState({
				name: 'Sendhuraan NKK'
			});	
		}, 1000);
	}

	render() {
		return (
			<div className='Home'>
				<h1>Hi, My name is {this.state.name}</h1>
			</div>
		);
	}
}

export default Home;
