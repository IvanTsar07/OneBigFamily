import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PopularPost extends Component {

	render() {

	    return (
            <div className="popularPost">
                <div className="bottomDescr">
                    <div>
                        <p>Lindemans Wine</p>
                        <p>Art Direction, Web Design</p>
                    </div>

                    <div>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <p>257</p>
                    </div>
                </div>

                <div className="hoverIcons">
                    <div>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                   
                    <div>
                        <i className="fa fa-search-plus" aria-hidden="true"></i>
                    </div>
                    
                    <div>
                        <i className="fa fa-link" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
	    );
    }
}

export default PopularPost;