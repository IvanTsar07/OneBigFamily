import React, { Component } from 'react';
class BlogPost extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        var backImg = {backgroundImage: 'url(' + this.props.image + ')'};

        return (
            <div className="postBlog" key={this.props.id} data-category={this.props.category}>
                <div className="blogImg" style={backImg}></div>
                
                <p>{this.props.name}</p>
                <p>{this.props.shortDesription}</p>
                <p>{this.props.link}</p>
                <p>{this.props.views}</p>
            </div>
        );
    }
}
export default BlogPost;