import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as routes from '../constants/routes';

class Signin extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	onFormSubmit(e) {
		e.preventDefault();
		axios.post('http://localhost:4000/api/user/signin', {
			email: this.state.email,
			password: this.state.password
		})
		.then(function(res) {
			console.log(res + 'this is the response');
		})
		.catch(function(err) {
			console.log(err);
		});

	}
	render() {
		return (
			<div>
				<h1>Sign In</h1>
				<form onSubmit={this.onFormSubmit}>
				<input
					type='email' name='email'
					placeholder='Your email'
					onChange={this.onInputChange}
					value={this.state.value}
					required
				/>
				<input
					type='password' name='password'
					placeholder='Your password'
					onChange={this.onInputChange}
					value={this.state.value}
					required
				/>
				<Link to ={routes.SIGN_UP}>Need an account? Sign Up!</Link>
				<button>Sign In</button>
				</form>
			</div>
		);
	}
}
export default Signin;