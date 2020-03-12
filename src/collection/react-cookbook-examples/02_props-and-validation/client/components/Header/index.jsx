import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/logo.svg';

class Header extends Component {
	render() {

		// Getting props
		const { url, title } = this.props;

		return (
			<header className='App-header'>
				<a href={url}>
					<img className='App-logo' src={logo} alt='logo' />
				</a>
				<h1 className='App-title'>{title}</h1>
			</header>
		);
	}
}

// Validating props
Header.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string.isRequired
};

export default Header;
