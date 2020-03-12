import axios from 'axios';

import {
	FETCH_COINS_REQUEST,
	FETCH_COINS_SUCCESS,
	FETCH_COINS_ERROR

} from '../constants/action-types';

import {
	request,
	received,
	error

} from './base-actions';

export const fetchCoins = function() {

	return function(dispatch) {

		dispatch(request(FETCH_COINS_REQUEST));

		const axiosData = {
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			header: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		};

		return axios(axiosData)
				.then(function(response) {
					console.log(response);
					dispatch(received(FETCH_COINS_SUCCESS, response.data));
				})
				.catch(function(err) {
					dispatch(error(FETCH_COINS_ERROR));
				});
	};
};
