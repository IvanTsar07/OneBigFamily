import React, { Component } from 'react';
import LateBlogPost from './lateBlogPost';

class LatestBlogWrapper extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
	    return (
			<div className="lastPostWrapper">
				{
					this.props.allPosts.map(function(post) {
						if (post.last) {
							return <LateBlogPost key = {post.id} name={post.name} short={post.shortDesription} link={post.link} views={post.views} image={post.image} />;
						} 
                    })
				}
			</div>
	    );
    }
}

export default LatestBlogWrapper;
