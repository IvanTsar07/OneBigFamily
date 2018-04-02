import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/img/logo(1).png'

class Header extends Component {
  render() {
    return (
		<header>
			<div className="top-header">
				<div className="container">
					<div className="search-console">
						<input type="text" placeholder="Search"/>
						<i className="fa fa-search" aria-hidden="true"></i>
					</div>

					<div className="log-buttons">
						<Link to="/"><i className="fa fa-user-circle-o" aria-hidden="true"></i> <span>Login</span></Link>
						<Link to="/"><i className="fa fa-pencil" aria-hidden="true"></i> <span>Register</span></Link>
					</div>
				</div>
			</div>
			
			<div className="bottom-header">
				<div className="container">
					<div className="logo">
						<Link to="/"><img src={logo} alt=""/></Link>
					</div>
					
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/gallery">Gallery</Link>
							</li>
							<li>
								<Link to="/videos">Videos</Link>
							</li>
							<li>
								<Link to="">Faces</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
							<li>
								<Link to="/categories">Categories</Link>
							</li>
							<li>
								<Link to="/contacts">Contacts</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
    );
  }
}

export default Header;
