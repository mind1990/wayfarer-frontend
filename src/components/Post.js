import React, { Component } from 'react';

class Post extends Component {
	render() {
		return (
			<div className="post-container">
				<div>
					<img src={require("../images/cityphoto.jpeg")} alt="cityphoto" className="city-image" />
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