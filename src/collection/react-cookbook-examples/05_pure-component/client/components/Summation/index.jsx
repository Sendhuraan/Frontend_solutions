import React, { Component } from 'react';

import SummationResult from '../SummationResult';

import './index.css';

class Summation extends Component {
	constructor() {
		super();

		this.state = {
			numbers: '',
			results: []
		};

		this.handleNumberChange = this.handleNumberChange.bind(this);
	}

	handleNumberChange(e) {
		const inputValue = e.target.value;
		const numbers = Array.from(inputValue);

		const result = numbers.reduce(function(accumulator, value) {
			return (Number(accumulator) + Number(value));
		}, 0);

		// Assign result with the previous results
		this.setState({
			numbers: inputValue,
			results: [...this.state.results, result]
		});
	}

	render() {
		return (
			<div className='Summation'>
				<input
					type='text'
					value={this.state.numbers}
					onChange={this.handleNumberChange}
					placeholder='Enter numbers to add'
				/>
				
				<ul>
				{
					this.state.results.map(function(result, index) {
						return (
							<SummationResult key={index} result={result} />
						);
					})
				}
				
				</ul>
				
				
			</div>
		);
	}
	
}

export default Summation;
