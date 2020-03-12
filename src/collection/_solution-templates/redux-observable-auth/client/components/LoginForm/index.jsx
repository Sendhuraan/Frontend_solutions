import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../state/actions/user-actions';

import './index.css';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let fieldName = e.target.name;

		this.setState({
			[fieldName]: e.target.value
		});
	}

	handleSubmit(e) {
		const { username, password } = this.state;

		e.preventDefault();
		this.props.getUser(username, password);
	}

	render() {
		const { user } = this.props;

		return (
			<div className="TodoForm">
				<h1>Login</h1>

				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.username}
						name="username"
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="password"
						value={this.state.password}
						name="password"
						onChange={this.handleChange}
					/>
					<br />
					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
				<h3>Access Token: {user.access}</h3>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps, { getUser })(LoginForm);
