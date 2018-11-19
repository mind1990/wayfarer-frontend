import React, { Component } from 'react';
import Citylist from './Citylist';
import Cityview from './Cityview';

class Cities extends Component {
	render() {
		return (
			<div className="cities-page">
				<div className="citylist-container" >
					<Citylist />
				</div>
				<div className="cityview-container">
					<Cityview />
				</div>
			</div>
		)
	}
}

export default Cities;