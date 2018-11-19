import React, { Component } from 'react';

class City extends Component {
	render() {
		return (
			<div>
				<div className="city-box">
					<img src={require("../images/greatbritist.png")} alt="cityphoto" className="city-image" />
					<h2 className="city-name">London</h2>
				</div>
				<div className="city-box">
					<img src={require("../images/krflag.png")} alt="cityphoto" className="city-image" />
					<h2 className="city-name">Seoul</h2>
				</div>
				<div className="city-box">
					<img src={require("../images/italy-flag.jpg")} alt="cityphoto" className="city-image" />
					<h2 className="city-name">Rome</h2>
				</div>
				<div className="city-box">
					<img src={require("../images/jpflag.png")} alt="cityphoto" className="city-image" />
					<h2 className="city-name">Tokyo</h2>
				</div>
				<div className="city-box">
					<img src={require("../images/usaflag.png")} alt="cityphoto" className="city-image" />
					<h2 className="city-name">New York</h2>
				</div>
				<div className="city-box">
					<img src={require("../images/thaiflag.png")} alt="cityphoto" className="city-image" />
					<h2 className="city-name">Bangkok</h2>
				</div>
				<div className="city-box">
					<img src={require("../images/franceflag.png")} alt="cityphoto" className="city-image" />
					<h2 className="city-name">Paris</h2>
				</div>
			</div>
		)
	}
}

export default City;