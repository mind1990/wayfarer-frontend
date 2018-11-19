import React, { Component } from 'react';

class City extends Component {
	render() {
		return (
			<div className="city-box">
				<img src={require("../images/cityphoto.jpeg")} alt="cityphoto" className="city-image" />
				<h2 className="city-name">City name</h2>
			</div>
		)
	}
}

export default City;