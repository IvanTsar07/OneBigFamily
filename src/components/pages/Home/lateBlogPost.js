import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LateBlogPost extends Component {
  render() {
	
	var imageStyle = {backgroundImage: 'url(' + this.props.image + ')'}; 

    return (
		<div className="lastPost">
			{
				<div>
					<div className="postImage" style={imageStyle}></div>

					<p className="postName">
						<Link to={this.props.link}>
							{this.props.name}
						</Link>
					</p>
					
					<p className="postShort">{this.props.short}</p>

					<div className="bottom">
						<p className="postLink">
							<Link to={this.props.link}>
								Learn more
							</Link>
						</p>
						
						<p className="postViews"><i className="fa fa-eye" aria-hidden="true"></i> {this.props.views}</p>
					</div>
				</div>
			}
		</div>
    );
  }
}

export default LateBlogPost;
