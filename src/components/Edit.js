import React, { Component } from 'react';

class Edit extends Component {
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
	}
	
	render() {
		return (

		)
	}
}

export default Edit;