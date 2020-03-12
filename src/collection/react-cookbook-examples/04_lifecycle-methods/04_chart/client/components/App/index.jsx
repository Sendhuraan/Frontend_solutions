import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import Chart from '../Chart';
import Footer from '../Footer';

import './index.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			chartType: 'bar'
		};

		this.columns = [
			['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
			['ETH', 2000, 3000, 5000, 4000, 3000, 940],
			['XRP', 100, 200, 300, 500, 400, 300]
		];

		this.setBarChart = this.setBarChart.bind(this);
		this.setLineChart = this.setLineChart.bind(this);
	}

	setBarChart() {
		this.setState({
			chartType: 'bar'
		});
	}

	setLineChart() {
		this.setState({
			chartType: 'line'
		});
	}

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Chart';

		return (
			<div className='App'>
				<Header url={url} title={title} />

				<Content>
					<Chart
						chartType={this.state.chartType}
						columns={this.columns}
					/>

					<p>
						<button onClick={this.setBarChart}>Bar</button>
						<button onClick={this.setLineChart}>Line</button>
					</p>
				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
