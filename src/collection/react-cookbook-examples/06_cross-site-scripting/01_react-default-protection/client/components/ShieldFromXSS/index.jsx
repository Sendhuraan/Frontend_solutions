import React, { Component } from 'react';

const response = [
	{
		id: 1,
		title: 'My blog post 1...',
		content: '<p>This is <strong>HTML</strong> code</p>'
	},
	{
		id: 2,
		title: 'My blog post 2...',
		content: '<p>Alert: <script>alert(1);</script></p>'
	},
	{
		id: 3,
		title: 'My blog post 3...',
		content: '<p><img onmouseover="alert(\'This site is not secure\');" src="attack.jpg" /></p>'
	}
];

const initialState = JSON.stringify(response);

class ShieldFromXSS extends Component {

	render() {
		const posts = JSON.parse(initialState);

		return (
			<div className='secure-xss'>
				{
					posts.map(function(post) {
						return (
							<div key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</div>
						);
					})
				}
			</div>
		);
	}
	
}

export default ShieldFromXSS;
