import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Home(props) {

	const { isMobile } = props;

	return (
		<div className='Home'>
			<h1>Home</h1>

			<p>You are using: <strong>{isMobile ? 'mobile' : 'desktop'}</strong></p>
		</div>
	);
	
}

Home.propTypes = {
	isMobile: PropTypes.bool
};

function mapStateToProps(state) {
	return {
		isMobile: state.device.isMobile
	};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
