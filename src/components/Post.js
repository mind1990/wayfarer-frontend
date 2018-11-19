import React, { Component } from 'react';

class Post extends Component {
	render() {
		return (
			<div className="post-container">
				<div>
					<img src={require("../images/london.jpg")} alt="cityphoto" className="post-city-image" />
				</div>
				<div>
					<h1>Title</h1>
					<p>lorsflkjdsfdsfdslk;sdkfdskfjsd;fdsjfldsjkfsdj;fsk</p>
				</div>
			</div>
		)
	}
}

export default Post;