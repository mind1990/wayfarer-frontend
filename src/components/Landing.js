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
	      	src="https://picsum.photos/200/300/?random" 
	      	alt="First slide" 
	      />
	    	</div>
	    	<div class="carousel-item">
	      <img 
	      	class="d-block w-100" 
	      	src="https://picsum.photos/200/300/?random" 
	      	alt="Second slide" />
	    	</div>
	    	<div class="carousel-item">
	      <img 
	      	class="d-block w-100" 
	      	src="https://picsum.photos/200/300/?random" 
					alt="Third slide" />
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
					<div className="topics">
						<div>
						<h2>Topic</h2>
						<p>lorem</p>
						</div>
						<div>
						<h2>Topic</h2>
						<p>lorem</p>
						</div>
						<div>
						<h2>Topic</h2>
						<p>lorem</p>
						</div>
					</div>


			</div>
		)
	}
}

export default Landing;