import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
	render() {

		// children is special keyword which denotes anything (string or even component) that is passed as a children into a component
		// Getting a component from props
		const { children } = this.props;

		return (
			<main>
				{children}
			</main>
		);
	}
}

Content.propTypes = {
	children: PropTypes.element.isRequired
};

export default Content;
