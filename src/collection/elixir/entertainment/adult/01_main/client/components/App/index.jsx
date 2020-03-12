import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import AddPornstarForm from '../AddPornstarForm';
import PornstarsList from '../PornstarsList';
import Footer from '../Footer';

import './index.css';

class App extends Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Pornstars';

		return (
			<div className='App'>
				<Header url={url} title={title} />

				<Content>
					<div className="container">
						<div className="row">
							<div className="col-sm">
								<PornstarsList />
							</div>
							<div className="col-sm">
								<AddPornstarForm />
							</div>
						</div>
					</div>
					
				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
