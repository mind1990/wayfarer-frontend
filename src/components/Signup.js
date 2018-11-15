import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

class Signup extends Component {
	render() {
		return (
			<div>
				<h1>Sign Up</h1>
				<form onSubmit={this.handleSubmit}>
        <input
        	type='text' name='username'
        	placeholder='User name'
          onChange={this.handleChange}
          value=''
          required
        />
        <input
        	type='password' name='password'
        	placeholder='Password'
          onChange={this.handleChange}
          value=''
          minlength='8'
          required
        />
        <input
        	type='password' name='password'
        	placeholder='Confirm password'
          onChange={this.handleChange}
          value=''
          minlength='8'
          required
        />
        <input
        	type='email' name='email'
        	placeholder='Email address'
          onChange={this.handleChange}
          value=''
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