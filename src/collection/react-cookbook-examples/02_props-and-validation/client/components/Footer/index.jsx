import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer>
				&copy; Sendhuraan NKK {(new Date().getFullYear())}
			</footer>
		);
	}
}

export default Footer;
