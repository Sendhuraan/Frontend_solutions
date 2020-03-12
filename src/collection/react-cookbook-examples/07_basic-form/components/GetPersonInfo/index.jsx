import React, { Component } from 'react';

import './index.css';

class GetPersonInfo extends Component {
	constructor() {
		super();

		this.personForm = React.createRef();

		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			errors: {
				firstname: false,
				lastname: false,
				email: false
			}
		};

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	handleOnChange(e) {
		const inputValue = e.target.value;
		const inputName = e.target.name;

		const { errors } = this.state;
		const newErrorState = Object.assign({}, errors);
		newErrorState[inputName] = inputValue === '';

		this.setState({
			[inputName]: inputValue,
			errors: newErrorState
		});
	}

	handleOnSubmit(e) {
		e.preventDefault();

		const { firstname, lastname, email } = this.state;

		this.setState({
			errors: {
				firstname: firstname === '',
				lastname: lastname === '',
				email: email === ''
			}
		});

		if (
			this.state.firstname !== '' &&
			!this.state.errors.firstname &&
			this.state.lastname !== '' && !this.state.errors.lastname &&
			this.state.email !== '' && !this.state.errors.email
		) {
			this.personForm.current.submit();
		}
	}

	render() {
		return (
			<div className="person-form-container">
				<form
					method="post"
					onSubmit={this.handleOnSubmit}
					action="/submit"
					ref={this.personForm}
				>
					<div>
						<p>
							<strong>First Name*</strong>
						</p>
						<p>
							<input
								type="text"
								name="firstname"
								value={this.state.firstname}
								onChange={this.handleOnChange}
								className={this.state.errors.firstname ? 'error' : ''}
							/>
							{this.state.errors.firstname && (
								<div className="error-msg">Required field</div>
							)}
						</p>
					</div>

					<div>
						<p>
							<strong>Last Name*</strong>
						</p>
						<p>
							<input
								type="text"
								name="lastname"
								value={this.state.lastname}
								onChange={this.handleOnChange}
								className={this.state.errors.lastname ? 'error' : ''}
							/>
							{this.state.errors.lastname && (
								<div className="error-msg">Required field</div>
							)}
						</p>
					</div>

					<div>
						<p>
							<strong>Email*</strong>
						</p>
						<p>
							<input
								type="text"
								name="email"
								value={this.state.email}
								onChange={this.handleOnChange}
								className={this.state.errors.email ? 'error' : ''}
							/>
							{this.state.errors.email && (
								<div className="error-msg">Required field</div>
							)}
						</p>
					</div>

					<div>
						<p>
							<strong>Phone</strong>
						</p>
						<p>
							<input
								type="text"
								name="phone"
								value={this.state.phone}
								onChange={this.handleOnChange}
							/>
						</p>
					</div>

					<p>
						<button>Save Information</button>
					</p>
				</form>
			</div>
		);
	}
}

export default GetPersonInfo;
