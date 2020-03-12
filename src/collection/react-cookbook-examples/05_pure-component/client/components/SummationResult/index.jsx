import React, { PureComponent } from 'react';

class SummationResult extends PureComponent {
	
	render() {
		return (
			<li>{this.props.result}</li>
		);
	}
	
}

export default SummationResult;
