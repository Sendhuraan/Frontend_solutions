import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HITS_PER_PAGE = '10';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HITS_PER_PAGE = 'hitsPerPage=';

function searchFilter(searchValue) {
	return function(item) {
		return item.title.toLowerCase().includes(searchValue.toLowerCase());
	};
}

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			results: null,
			searchKey: '',
			searchValue: DEFAULT_QUERY,
			error: null
		};

		this.onDismiss = this.onDismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.setSearchTopStories = this.setSearchTopStories.bind(this);
		this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
	}

	onDismiss(id) {
		const { searchKey, results } = this.state;
		const { hits, page } = results[searchKey];

		const updatedHits = hits.filter((item) => {
			return item.objectID !== id;
		});

		this.setState({
			results: {
				...results,
				[searchKey]: { 
					hits: updatedHits,
					page
				}
			}
		});
	}

	onSearchChange(event) {
		this.setState({
			searchValue: event.target.value
		});
	}

	setSearchTopStories(result) {
		const { hits, page } = result;

		const { searchKey, results } = this.state;

		const oldHits = results && results[searchKey] ? results[searchKey].hits : [];

		const updatedHits = [ ...oldHits, ...hits ];

		this.setState({
			results: {
				...results,
				[searchKey]: { 
					hits: updatedHits,
					page
				}
			}
		});
	}

	fetchSearchTopStories(searchValue, page = 0) {
		axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchValue}&${PARAM_PAGE}${page}&${PARAM_HITS_PER_PAGE}${DEFAULT_HITS_PER_PAGE}`)
			.then((result) => { this.setSearchTopStories(result.data); })
			.catch((error) => { this.setState({ error }); });
	}

	onSearchSubmit(event) {
		event.preventDefault();

		const { searchValue } = this.state;
		this.setState({
			searchKey: searchValue
		});

		if(this.needsToSearchTopStories(searchValue)) {
			this.fetchSearchTopStories(searchValue);
		}
	}

	needsToSearchTopStories(searchValue) {
		return !this.state.results[searchValue];
	}

	componentDidMount() {
		this._isMounted = true;

		const { searchValue } = this.state;
		this.setState({
			searchKey: searchValue
		});

		this.fetchSearchTopStories(searchValue);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {

		const { searchValue, results, searchKey, error } = this.state;
		const page = (results && results[searchKey] && results[searchKey].page) || 0;
		const list = (results && results[searchKey] && results[searchKey].hits) || [];

		return (
			<div className='page'>
				<div className='interactions'>
					<Search value={searchValue} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}>
						Search Books 
					</Search>
				</div>
					
				{ 	error
					?
					<div className='interactions'>
						<p>Something Went Wrong.</p>
					</div>
					:
					<div className='interactions'>
						<Table list={list} onDismiss={this.onDismiss} />
					</div>
				}
	
				<div className='interactions'>
					<Button onClick={() => this.fetchSearchTopStories(searchValue, page + 1)} >
						More
					</Button>
				</div>
			</div>
		);
	}
}

function Search(props) {

	const { value, onChange, onSubmit, children } = props;

	return (
		<form onSubmit={onSubmit}>
			{children}
			<input type='text' value={value} onChange={onChange} />
			<input type='submit' value={children} />
		</form>
	);
}

function Table(props) {

	const { list, searchPattern, onDismiss } = props;

	const largeColumn = {
		width: '40%'
	};

	const midColumn = {
		width: '30%'
	};

	const smallColumn = {
		width: '10%'
	};

	return (
		<div className='table'>
			{list.map((item) => {
				return (
					<div className='table-row' key={item.objectID}>
						<span style={ largeColumn }><a href={item.url}>{item.title}</a></span>
						<span style={ midColumn }>{item.author}</span>
						<span style={ smallColumn }>{item.num_comments}</span>
						<span style={ smallColumn }>{item.points}</span>
						<span>
							<Button className='button-inline' onClick={() => onDismiss(item.objectID)}>
								Dismiss
							</Button>
						</span>
					</div>
				);
			})
			}
		</div>
	);
}

function Button(props) {

	const { className = '', onClick, children } = props;

	return (
		<input type='button' className={className} onClick={onClick} value={children} />
	);
}

export default App;
