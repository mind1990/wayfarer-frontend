import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as routes from '../constants/routes';

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
			confirmpassword: "",
			email: "",
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	onFormSubmit(e) {
		e.preventDefault();

		console.log(`username is ${this.state.username}, password is ${this.state.password}, confirmpassword is ${this.state.confirmpassword}, email is ${this.state.email}`);

		if (this.state.password !== this.state.confirmpassword) {
			console.log('passwords don\'t match');
			return;
		}

		axios.post('http://localhost:4000/api/user/signup', {
	    username: this.state.username,
	    password: this.state.password,
	    confirmpassword: this.state.confirmpassword,
	    email: this.state.email

	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
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
        	type='password' name='confirmpassword'
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





