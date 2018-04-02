import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopNewOfMonth extends Component {

	render() {

	    return (
            <section className="topNewOfMonthSection">
                <div className="container">
                    <h2>Top new of the month</h2>

                    <p>That we can tuck in our children at night and know that they are fed and clothed and safe <br/> from harm. Our trials and triumphs became at once unique and universal.</p>
                
                    <Link to="/">go to new now!</Link>
                </div>
            </section>
	    );
    }
}

export default TopNewOfMonth;



