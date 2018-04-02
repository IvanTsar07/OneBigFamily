import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

class QuotesSlider extends Component {
    constructor(props) {
		super(props);
		this.state = {
			slide: props.quotes
		};
	}


    render() {   
      return (
        <OwlCarousel 
            className="owl-theme"
            loop={true} 
            margin={-1}
            nav={false}
            items={1}
            autoplay={true}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            smartSpeed={1500}
            id="quotesslider"
        >

            {
                this.props.slide.map(function(slide){
                    return (
                        <div className="item" key={slide.id}>
                            <div className="quote">
                                <p>{slide.quote}</p>
                                <p className="musicianName">{slide.name}, {slide.band}</p>
                            </div>
                        </div>
                    );
                })
            }
        </OwlCarousel>
      );
    }
  }
  
  export default QuotesSlider;
  