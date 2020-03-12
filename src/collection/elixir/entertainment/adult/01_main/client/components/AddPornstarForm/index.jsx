import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPornstar } from '../../state/actions/pornstar-actions';

import './index.css';

class AddPornstarForm extends Component {

	constructor(props) {
		super(props);

		this.personForm = React.createRef();

		this.state = {
			pornstar_name: '',
			pornstar_alias_names: '',
			errors: {
				pornstar_name: false,
				pornstar_alias_names: false
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

		const { pornstar_name, pornstar_alias_names } = this.state;

		this.props.addPornstar(pornstar_name, pornstar_alias_names);
		this.personForm.current.reset();
	}
	
	render() {
		return (
			<div className='person-form-container'>
				<form
					onSubmit={this.handleOnSubmit}
					ref={this.personForm}
				>
					<div>
						<p><strong>Pornstar Name*</strong></p>
						<p>
							<input
								type='text'
								name='pornstar_name'
								value={this.state.firstname}
								onChange={this.handleOnChange}
								className={this.state.errors.pornstar_name ? 'error' : ''}
							/>
							{
								this.state.errors.pornstar_name &&
								<div className='error-msg'>Required field</div>
							}
						</p>
					</div>

					<div>
						<p><strong>Pornstar alias names*</strong></p>
						<p>
							<input
								type='text'
								name='pornstar_alias_names'
								value={this.state.lastname}
								onChange={this.handleOnChange}
								className={this.state.errors.alias_names ? 'error' : ''}
							/>
							{
								this.state.errors.alias_names &&
								<div className='error-msg'>Required field</div>
							}
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

export default connect(null, { addPornstar })(AddPornstarForm);
