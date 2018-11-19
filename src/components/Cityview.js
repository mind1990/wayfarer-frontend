import React, { Component } from 'react';
import Post from './Post';

class Cityview extends Component {
	render() {
		return (
			<div className="city-view-container">
				<div className="upper-container">
					<div className="city-details">
						<h1>London</h1>
						<h3>United Kingdom</h3>
						<button className="add-button">+</button>
					</div>
					<div className="big-city-image">
						<img src={require("../images/london.jpg")} alt="london" className="city-view-image" />
					</div>
				</div>
					<h1 className="posts-header">Posts</h1>
					<div className="lower-container">
						<div>
						<Post />
						</div>
				</div>
			</div>
		)
	}
}

export default Cityview;