import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Notes extends Component {
	constructor() {
		super();

		this.state = {
			notes: [
				{
					id: 1,
					title: 'My Note 1'
				},
				{
					id: 2,
					title: 'My Note 2'
				},
				{
					id: 3,
					title: 'My Note 3'
				}
			]
		};

		this.renderNotes = this.renderNotes.bind(this);
	}

	renderNotes(notes) {
		return (
			<ul>
				{
					notes.map(function(note) {
						return (
							<li key={note.id}>
								<Link to={`/notes/${note.id}`}>{note.title}</Link>
							</li>
						);
					})
				}
			</ul>
		);		
	}

	render() {

		const { noteId } = this.props.match.params;
		const { notes } = this.state;

		let selectedNote = false;

		if(noteId > 0) {
			selectedNote = notes.filter(function(note) {
				return (note.id === Number(noteId));
			});
		}

		return (
			<div className='Notes'>
				<h1>Notes</h1>

				{this.renderNotes(selectedNote || notes)}
			</div>
			
		);
	}
}

export default Notes;
