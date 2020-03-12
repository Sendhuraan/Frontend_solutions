import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import PomodoroTimer from '../PomodoroTimer';
import Footer from '../Footer';

import './index.css';

class App extends React.Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Pomodoro Timer';

		return (
			<div className='App'>
				{/* Passing props into component */}
				<Header url={url} title={title} />

				<Content>
					{/* Passing component as children */}
					<PomodoroTimer />

				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
