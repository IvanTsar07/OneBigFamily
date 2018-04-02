import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TeamShortProf extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		posts: props.allPosts
	// 	};
	// }

	handleHover = function(e) {
		var targetParent = e.target.parentNode;

		var name = targetParent.querySelector('.profileName');	
		var decsription = targetParent.querySelector('.profileDescription');

		name.classList.add('opac');
		decsription.classList.add('height0');
	}
	
	handleMouseLeave = function(e) {
		var targetParent = e.target.parentNode;

		var name = targetParent.querySelector('.profileName');	
		var decsription = targetParent.querySelector('.profileDescription');

		name.classList.remove('opac');
		decsription.classList.remove('height0');
	}
	
	render() {

	    return (
			<div className="shortProfile" id={this.props.id}>
                <div className="profilePhoto">
					<div className="profileDescription">
						<div className="profileName">
							<p className="peopleName">{this.props.name}</p>
							<p className="peoplePosition">{this.props.position}</p>
						</div>

						<p className="shortDesription">{this.props.shortDescription}</p>
					</div>	
				</div>

				<Link to={this.props.link} className="profileLink" onMouseOver={this.handleHover} onMouseLeave={this.handleMouseLeave}>Profile</Link>
            </div>
	    );
    }
}

export default TeamShortProf;
