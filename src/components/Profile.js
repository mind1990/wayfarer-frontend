import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import * as routes from '../constants/routes';

class Profile extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>Profile Page</h1>
					<h2>First name</h2>
					<h2>Last name</h2>
					<h2>Email</h2>
					<button>Edit</button>
				</div>
				<div>
					<h2>Date joined</h2>
					<h1>Your posts</h1>
				</div>
			</div>
		);
	}
}

export default Profile;


