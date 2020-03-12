import React, { Component } from 'react';

import './index.css';

class PomodoroTimer extends Component {
	constructor() {
		super();

		this.state = {
			time: 0,
			alert: {
				type: '',
				message: ''
			}
		};

		this.constants = {
			work: {
				time: 1500,
				alert: {
					type: 'work',
					message: 'Working'
				}
			},
			shortBreak: {
				time: 300,
				alert: {
					type: 'short-break',
					message: 'Taking short break'
				}
			},
			longBreak: {
				time: 900,
				alert: {
					type: 'long-break',
					message: 'Taking long break'
				}
			},
			buzz: {
				time: 0,
				alert: {
					type: 'buzz',
					message: 'Buzzzzzz!'
				}
			}
		};

		this.setTimeAndMessage = this.setTimeAndMessage.bind(this);
		this.startWork = this.startWork.bind(this);
		this.takeShortBreak = this.takeShortBreak.bind(this);
		this.takeLongBreak = this.takeLongBreak.bind(this);
		this.formatTime = this.formatTime.bind(this);
		this.startCountDown = this.startCountDown.bind(this);
		this.stopOrResetCountDown = this.stopOrResetCountDown.bind(this);
	}

	componentDidMount() {
		const { time, alert } = this.constants.work;
		const { type, message } = alert;

		this.setTimeAndMessage(time, type, message);
	}

	setTimeAndMessage(time, alertType, alertMessage) {
		this.setState({
			time: time,
			alert: {
				type: alertType,
				message: alertMessage
			}
		});
	}

	startWork() {
		const { time, alert } = this.constants.work;
		const { type, message } = alert;

		this.setTimeAndMessage(time, type, message);
		this.startCountDown();
	}

	takeShortBreak() {
		const { time, alert } = this.constants.shortBreak;
		const { type, message } = alert;
		
		this.setTimeAndMessage(time, type, message);
		this.startCountDown();
	}

	takeLongBreak() {
		const { time, alert } = this.constants.longBreak;
		const { type, message } = alert;
		
		this.setTimeAndMessage(time, type, message);
		this.startCountDown();
	}

	formatTime(seconds) {
		const m = Math.floor(seconds % 3600 / 60);
		const s = Math.floor(seconds % 3600 % 60);

		return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
	}

	startCountDown() {
		this.stopOrResetCountDown();

		this.interval = setInterval(() => {
			if(this.state.time === 0) {
				const { time, alert } = this.constants.buzz;
				const { type, message } = alert;
				
				this.setTimeAndMessage(time, type, message);
				this.stopOrResetCountDown();
			}
			else {
				this.setState(function(state) {
					let newState = Object.assign({}, state);
					newState.time = state.time - 1;

					return newState;
				});	
			}
		}, 1000);
	}

	stopOrResetCountDown() {
		clearInterval(this.interval);
	}

	render() {
		const { time, alert } = this.state;
		const { type, message } = alert;

		return (
			<div className='Pomodoro'>

				<div className={`alert ${type}`}>
					{message}
				</div>

				<div className='timer'>
					{this.formatTime(time)}
				</div>

				<div className='types'>
					<button className='start' onClick={this.startWork}>Start Working</button>
					<button className='short' onClick={this.takeShortBreak}>Short Break</button>
					<button className='long' onClick={this.takeLongBreak}>Long Break</button>
				</div>
			</div>
		);
	}
}

export default PomodoroTimer;
