import React, { Component } from 'react';

class Post extends Component {
	render() {
		return (
			<div className="single-post-container">
				<div>
					<img src={require("../images/london.jpg")} alt="cityphoto" className="post-city-image" />
				</div>
				<div>
					<h1>Title</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe odio incidunt consequatur ipsam omnis voluptatibus, deserunt nesciunt magnam nam maiores minus repellat tempore quod tenetur exercitationem dolorum ad veniam!</p>
				</div>

			</div>
		)
	}
}

export default Post;