import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<div className='box-1'>
						<i className="fab fa-laravel" alt='logo' />
						<h1>Wayfarer</h1>
					</div>
					
					<div className='box-2'>
						<Link to ={routes.CITIES} className='nav-link'>Cities</Link>
						<Link to ={routes.SIGN_IN} className='nav-link'>Sign In</Link>
						<Link to ={routes.SIGN_UP} className='nav-link'>Sign Up</Link>
						<Link to ={routes.LOG_OUT} className='nav-link'>Log Out</Link>
						<Link to ={routes.PROFILE} className='nav-link'>Profile</Link>
					</div>
					
				</nav>
			</header>
		);
	}
}

export default Header;