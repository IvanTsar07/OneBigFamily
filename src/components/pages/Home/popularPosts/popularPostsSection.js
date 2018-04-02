import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PopularPost from './popularPost';

class PopularPostsSection extends Component {

	render() {

	    return (
			<section className="popularPostsSection">
               <div className="container">
                    <h2>Popular posts</h2>

                    <p>That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our trials and triumphs became at once unique and universal.</p>
               
                    <div className="popularPostWrapper">
                        <PopularPost />
                        <PopularPost />
                        <PopularPost />
                    </div>
               </div>
            </section>
	    );
    }
}

export default PopularPostsSection;