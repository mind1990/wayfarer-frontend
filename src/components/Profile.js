import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import * as routes from '../constants/routes';

class Profile extends Component {
	// componentDidMount() {
 //    axios.get('http://localhost:4000/api/user')
 //      if (res) {
 //      	console.log(res)
 //    }
 //  }


	render() {
		return (
			<div>
				<div className="profile-container">
					
					<div>
						<h2 className="fullname">Kenny</h2>
						<h2 className="fullname">Brocky</h2>
					</div>
					<h2>kennybrockforever@gmail.com</h2>
					<button id="edit-button">Edit</button>
					<h3 className="date-join">Date joined: 10/1/2018</h3>
					<h1 className="posts">Your posts</h1>
					<Link to ="" className='post-link'>post</Link>
						<Link to ="" className='post-link'>post</Link>
						<Link to ="" className='post-link'>post</Link>
						<Link to ="" className='post-link'>post</Link>
						<Link to ="" className='post-link'>post</Link>
				</div>
			</div>
		);
	}
}

export default Profile;


