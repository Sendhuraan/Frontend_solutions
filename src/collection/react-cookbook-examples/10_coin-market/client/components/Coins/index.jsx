import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { isFirstRender } from '../../utilities';
import { fetchCoins } from '../../actions/coin-actions';

import './index.css';

class Coins extends Component {

	constructor(props) {
		super(props);

		const { fetchCoins } = this.props;
		fetchCoins();
	}

	render() {

		const { coins: { coins } } = this.props;

		if(isFirstRender(coins)) {
			return null;
		}
		else {
			return (
				<div className='Coins'>
					<h1>Top 100 Coins</h1>

					<ul>
						{
							coins.map(function(coin) {
								return (
									<li key={coin.id}>
										<span className='left'>{coin.employee_name} {coin.employee_age} </span>
										<span className='right'>${coin.employee_salary}</span>
									</li>
								);
							})
						}
					</ul>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ fetchCoins },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Coins);
