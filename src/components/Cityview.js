import React, { Component } from 'react';
import Post from './Post';

class Cityview extends Component {
	render() {
		return (
			<div className="city-view-container">
				<div className="upper-container">
					<div className="city-details">
						<h1>Cityname</h1>
						<h3>Country</h3>
						<button className="add-button">+</button>
					</div>
					<div className="city-image">
						<img src={require("../images/cityphoto.jpeg")} alt="cityphoto" className="city-view-image" />
					</div>
				</div>
				<div className="lower-container">
					<h1>Posts</h1>
					<div className="all-posts">
						<Post />
					</div>
				</div>
			</div>
		)
	}
}

export default Cityview;