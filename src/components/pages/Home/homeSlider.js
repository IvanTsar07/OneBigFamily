import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

import slide1 from '../../../Assets/img/slider/slide1.jpg';
import slide2 from '../../../Assets/img/slider/slide2.jpg';
import slide3 from '../../../Assets/img/slider/slide3.jpg';
import slide4 from '../../../Assets/img/slider/slide4.jpg';


class HomeSlider extends Component {


	render() {

	    return (
			<section className="homeSliderComponent">
				<OwlCarousel 
				    className="owl-theme"
				    loop={true} 
				    margin={-1}
				    nav={false}
				    items={1}
				    autoplay={true}
				    autoplayTimeout={7500}
				    autoplayHoverPause={true}
				    smartSpeed={2000}
				    id="homeslider"
				>

				    <div className="item">
						<img src={slide1} alt=""/>
						
						<div className="slideName">
							<p><span>Create new music</span></p>
							<p>Create your own world</p>
						</div>
						
						<div className="slideRefs">
							<Link to=""></Link>
							<Link to=""></Link>
						</div>	
				    </div>

				    <div className="item">
						<img src={slide2} alt=""/>

						<div className="slideName">
							<p><span>Create new music</span></p>
							<p>Create your own world</p>
						</div>
						
						<div className="slideRefs">
							<Link to=""></Link>
							<Link to=""></Link>
						</div>
				    </div>

				    <div className="item">
						<img src={slide3} alt=""/>

						<div className="slideName">
							<p><span>Create new music</span></p>
							<p>Create your own world</p>
						</div>
						
						<div className="slideRefs">
							<Link to=""></Link>
							<Link to=""></Link>
						</div>	
				    </div>

				    <div className="item">
						<img src={slide4} alt=""/>

						<div className="slideName">
							<p><span>Create new music</span></p>
							<p>Create your own world</p>
						</div>
						
						<div className="slideRefs">
							<Link to=""></Link>
							<Link to=""></Link>
						</div>	
				    </div>

				</OwlCarousel>
			</section>
	  );
	}
}

export default HomeSlider;