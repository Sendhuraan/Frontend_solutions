import React from 'react';
import { connect } from 'react-redux';

import { deletePornstar } from '../../state/actions/pornstar-actions';

import './index.scss';

function PornstarsList(props) {
	const { pornstars } = props;

	return (
		<div className='pornstars-list'>
			<ul className='list-group'>
				{pornstars.map(function(pornstar) {
					return (
						<li
							key={pornstar.id}
							className='list-group-item'
						>
							<span>{pornstar.name}</span>
							{pornstar.alias_names && (
								<em>aka {pornstar.alias_names}</em>
							)}
							<button
								className='trash'
								onClick={() => props.deletePornstar(pornstar.id)}
							>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		pornstars: state.pornstars
	};
}

export default connect(mapStateToProps, { deletePornstar })(PornstarsList);
