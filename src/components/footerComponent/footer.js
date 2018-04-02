import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
		<footer>
			<div className="container">
        
        <div className="footerContacts">
            <p className="pointName">Get in touch</p>


            <p className="contactsItem"><i className="fa fa-home" aria-hidden="true"></i> <span>Adress: </span>02000, 14 Lviv square, Ukraine, Kiev</p>
            <p className="contactsItem"><i className="fa fa-envelope" aria-hidden="true"></i> <span>Phone: </span>+7 998 71 150 30 20</p>
            <p className="contactsItem"><i className="fa fa-phone" aria-hidden="true"></i> <span>Email: </span>info@ambertheme.com</p>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.1371934799915!2d30.503946071889715!3d50.45461499476926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5d8c515749%3A0xe1a4da5710d46c46!2z0JrQndCV0KMgNyDQmtC-0YDQv9GD0YE!5e0!3m2!1sru!2sua!4v1521380768449" frameborder="0" allowfullscreen></iframe>
        </div>

        <div className="footerLastPosts">
            <p className="pointName">Latest posts</p>
        </div>


        <div className="footerSocNet">
            <p className="pointName">Follow us</p>

            <div className="socIcon" >
              <Link to="/" target="_blank">
                  <div className="icon icon-facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i> 
                  </div>
                </Link>
                <p>Like us on Facebook</p>
            </div>
            
            <div className="socIcon" >
                <Link to="/" target="_blank">
                  <div className="icon icon-twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </Link>

                <p>Follow us on Twitter</p>
            </div>
            
            <div className="socIcon" >
                <Link to="/" target="_blank">
                  <div className="icon icon-youtube">
                      <i className="fa fa-youtube-square" aria-hidden="true"></i>
                  </div>
                </Link>
                <p>Watch videos on YouTube</p>
            </div>
            
            <div className="socIcon" >
                <Link to="/" target="_blank">
                    <div className="icon icon-instagram">   
                      <i className="fa fa-instagram" aria-hidden="true"></i> 
                    </div>
                </Link>
                <p>Friend us on Instagram</p>
            </div>
            
            <div className="socIcon" >
               <Link to="/" target="_blank">
                  <div className="icon icon-pinterest">
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                  </div>
                </Link>

                <p>Repin on Pinterest</p>
            </div>
        </div>

        <div className="footerPopularPosts">
            <p className="pointName">Popular posts</p>
        </div>
      </div>
		</footer>
    );
  }
}

export default Footer;
