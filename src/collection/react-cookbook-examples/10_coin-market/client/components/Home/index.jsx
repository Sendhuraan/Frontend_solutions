import React from 'react';
import PropTypes from 'prop-types';

function Home(props) {

	const { isMobile } = props;

	return (
		<div className='Home'>
			<h1>Home</h1>
		</div>
	);
	
}

Home.propTypes = {
	isMobile: PropTypes.bool
};

export default Home;
