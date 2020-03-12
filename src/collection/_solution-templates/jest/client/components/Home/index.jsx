import React, { Component } from 'react';

import './index.css';

const buttonStyle = {
	backgroundColor: 'gray',
	border: '1px solid black'
};

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>I'm Home component</h1>

				{/* Inline styles */}
				<p>
					<button
						style={{
							backgroundColor: 'gray',
							border: '1px solid black'
						}}
					>
						Inline style via property
					</button>
				</p>

				{/* styles as object */}
				<p>
					<button style={buttonStyle}>Inline style via object</button>
				</p>
			</React.Fragment>
		);
	}
}

export default Home;
