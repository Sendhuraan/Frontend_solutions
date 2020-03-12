import React from 'react';
import PropTypes from 'prop-types';

// Functional Component
function Content(props) {

	// children is special keyword which denotes anything (string or even component) that is passed as a children into a component
	// Getting a component from props
	const { children } = props;

	return (
		<main>
			{children}
		</main>
	);
}

Content.propTypes = {
	children: PropTypes.array.isRequired
};

export default Content;
