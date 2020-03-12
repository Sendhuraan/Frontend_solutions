import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

(function() {

	var assert = require('chai').assert;

	// var nullFunction = function() {};

	describe('Simple Component', function() {

		var mountElement = document.createElement('div');
		mountElement.setAttribute('id', 'container1');
		document.body.appendChild(mountElement);

		function Hello() {
			return (
				<h1>Hello, world!</h1>
			);
		}

		it('Will render \'Hello, world!\' in DOM', function() {
			act(function() {
				ReactDOM.render(
					<Hello />,
					mountElement
				);
			});

			var renderedElement = mountElement.querySelector('h1');

			assert.equal(renderedElement.textContent, 'Hello, world!');
		});

		document.body.removeChild(mountElement);

	});


	describe('State and Lifecycle', function() {

		var mountElement = document.createElement('div');
		mountElement.setAttribute('id', 'container2');
		document.body.appendChild(mountElement);

		class Clock extends React.Component {
			constructor(props) {
				super(props);
				this.state = {date: new Date()};
			}

			componentDidMount() {
				this.timerID = setInterval(() => {
					this.tick();
				}, 1000);
			}

			componentWillUnmount() {
				clearInterval(this.timerID);
			}

			tick() {
				this.setState({
					date: new Date()
				});
			}

			render() {
				return (
					<div>
						<h1>Hello, world!</h1>
						<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
					</div>
				);
			}
		}

		it('Will update state and increment time', function() {
			act(function() {
				ReactDOM.render(
					<Clock />,
					mountElement
				);
			});
		});

		document.body.removeChild(mountElement);

	});
	
})();
