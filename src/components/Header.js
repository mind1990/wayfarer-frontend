import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<div className='box-1'>
						<i className="fab fa-laravel" alt='logo' />
						<h1>Wayfarer</h1>
					</div>
					
					<ul className='box-2'>
						<li className='nav-link'>Cities</li>
						<li className='nav-link'>Sign In</li>
						<li className='nav-link'>Sign Up</li>
						<li className='nav-link'>Log Out</li>
					</ul>
					
				</nav>
			</header>
		);
	}
}

export default Header;