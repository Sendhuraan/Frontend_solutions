import React, { Component } from 'react';
import c3 from 'c3';

import './index.css';

class Chart extends Component {
	constructor(props) {
		super(props);

		this.updateChart = this.updateChart.bind(this);
	}

	componentDidMount() {
		this.updateChart();
	}

	componentDidUpdate() {
		this.updateChart();
	}

	updateChart() {
		c3.generate({
			bindTo: '#chart',
			data: {
				type: this.props.chartType,
				columns: this.props.columns
			}
		});
	}

	render() {
		return (
			<div id='chart'>
			</div>
		);
	}
}

export default Chart;
