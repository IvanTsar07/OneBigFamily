import React, { Component } from 'react';
import LatestBlogWrapper from './lastestBlogsWrapper';



class LatestsBlogPosts extends Component {
	constructor(props) {
		super(props);
	  }  
	
	render() {
	    return (
			<section className="LatestsBlogPosts">
				<div className="container">
					<h2>Latest blog posts</h2>
				
					<LatestBlogWrapper allPosts={this.props.data} />
				</div>
			</section>
	    );
    }
}

export default LatestsBlogPosts;
