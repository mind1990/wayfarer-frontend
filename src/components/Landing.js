import React, { Component } from 'react';
import * as routes from '../constants/routes';

class Landing extends Component {
	render() {
		return (
			<div>
				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
				  <div class="carousel-inner">
					  <div class="carousel-item active">
				      <img 
				      	class="d-block w-100" 
				      	src={require("../images/london.jpg")} 
				      	alt="First slide" 
				      />
			    	</div>
			    	<div class="carousel-item">
				      <img 
				      	class="d-block w-100" 
				      	src={require("../images/bangkok.jpg")}
				      	alt="Second slide" 
				      />
			    	</div>
			    	<div class="carousel-item">
				      <img 
				      	class="d-block w-100" 
				      	src={require("../images/tokyo.jpg")}
								alt="Third slide" 
							/>
			    	</div>
					 </div>
			  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
	  		</a>
				</div>

				
					<h2 id="wayfarer-header">Wayfarer is...</h2>
					<div className="topics-container">
						<div className="topic-box">
						<h2>Topic</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe odio incidunt consequatur ipsam omnis voluptatibus, deserunt nesciunt magnam nam maiores minus repellat tempore quod tenetur exercitationem dolorum ad veniam!</p>
						</div>
						<div className="topic-box">
						<h2>Topic</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe odio incidunt consequatur ipsam omnis voluptatibus, deserunt nesciunt magnam nam maiores minus repellat tempore quod tenetur exercitationem dolorum ad veniam!</p>
						</div>
						<div className="topic-box">
						<h2>Topic</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe odio incidunt consequatur ipsam omnis voluptatibus, deserunt nesciunt magnam nam maiores minus repellat tempore quod tenetur exercitationem dolorum ad veniam!</p>
						</div>
					</div>


			</div>
		)
	}
}

export default Landing;