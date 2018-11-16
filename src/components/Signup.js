import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as routes from '../constants/routes';

class Signup extends Component {
	
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmpassword: '',
			email: ''
		}
		this.onInputChange = this.onInputChange.bind(this);
	}
	onInputChange(event) {
		this.setState({
			username: event.target.value,
			password: event.target.value,
			confirmpassword: event.target.value,
			email: event.target.value
		})
	}
	onFormSubmit(event) {
		event.preventDefault()

		
		// axios.post('http://localhost:4000/api/user/signin')
		// 	.then(res => {
		// 		console.log(res)
		// 		console.log(res.data)
		// 	})

		

	}

	render() {
		return (
			<div>
				<h1>Sign Up</h1>
				<form onSubmit={this.onFormSubmit}>
        <input
        	type='text' name='username'
        	placeholder='User name'
          onChange={this.onInputChange}
          value={this.state.value}
          required
        />
        <input
        	type='password' name='password'
        	placeholder='Password'
          onChange={this.onInputChange}
          value={this.state.value}
          minLength='8'
          required
        />
        <input
        	type='password' name='password'
        	placeholder='Confirm password'
          onChange={this.onInputChange}
          value={this.state.value}
          minLength='8'
          required
        />
        <input
        	type='email' name='email'
        	placeholder='Email address'
          onChange={this.onInputChange}
          value={this.state.value}
          required
        />
        <Link to ={routes.SIGN_IN}>Already have an account? Sign In!</Link>
        <button>Sign Up</button>
      </form>
			</div>
		);
	}
}


export default Signup;





