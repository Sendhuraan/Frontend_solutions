import React, { Component } from 'react';

import './index.css';

class CryptoCoinsExchanger extends Component {
	constructor() {
		super();

		this.state = {
			dollars: 0
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	shouldComponentUpdate(props, state) {
		return (state.dollars % 10 === 0);
	}

	handleOnChange(e) {
		this.setState({
			dollars: Number(e.target.value || 0)
		});
	}

	render() {
		return (
			<div className='CryptoCoinsExchanger'>
				<h1>Buy Crypto Coins!</h1>

				<div className='question'>
					<p>How much dollars do you have?</p>
					<p>
						<input type='text' placeholder='0' onChange={this.handleOnChange} />
					</p>
				</div>

				<div className='answer'>
					<p>Crypto Coin price: $10</p>
					<p>You can buy <strong>{this.state.dollars / 10}</strong> coins.</p>
				</div>
			</div>
		);
	}
}

export default CryptoCoinsExchanger;
