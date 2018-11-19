import React, { Component } from 'react';
import City from './City';

class Citylist extends Component {
	render() {
		return (
			<div className="scroller">
				<h1 className="cities-header">Cities</h1>
				<City />
			</div>
		)
	}
}

export default Citylist;