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
			<div className="form-container">
				<h1 className="text">Sign Up</h1>
				<form onSubmit={this.onFormSubmit} className="form">
        <input
         	className="text"
        	type='text' name='username'
        	placeholder='User name'
          onChange={this.onInputChange}
          value={this.state.value}
          required
        />
        <input
         	className="text"
        	type='password' name='password'
        	placeholder='Password'
          onChange={this.onInputChange}
          value={this.state.value}
          minLength='8'
          required
        />
        <input
        	className="text"
        	type='password' name='confirmpassword'
        	placeholder='Confirm password'
          onChange={this.onInputChange}
          value={this.state.value}
          minLength='8'
          required
        />
        <input
        	className="text"
        	type='email' name='email'
        	placeholder='Email address'
          onChange={this.onInputChange}
          value={this.state.value}
          required
        />
        <button className="button">Sign Up</button>
        <Link to ={routes.SIGN_IN} className="question">Already have an account? Sign In!</Link>
      </form>
			</div>
		);
	}
}


export default Signup;





