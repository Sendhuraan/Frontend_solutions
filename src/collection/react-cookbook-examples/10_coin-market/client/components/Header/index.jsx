import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

import logo from '../../images/logo.svg';

function Header(props) {

	// Getting props
	const { url, title } = props;

	return (
		<header className='App-header'>
			<a href={url}>
				<img className='App-logo' src={logo} alt='logo' />
			</a>
			<h1 className='App-title'>{title}</h1>

			<div className='header-links'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<Link to='/notes'>Notes</Link>
					</li>
					<li>
						<Link to='/coins'>Coins</Link>
					</li>
				</ul>
			</div>
			
		</header>
	);
}

// Validating props
Header.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string.isRequired
};

export default Header;
