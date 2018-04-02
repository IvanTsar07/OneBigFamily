import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SuperbFeatureSection extends Component {

	render() {

	    return (
            <section className="superbFeatureSection">
                <div className="container" >
                    <h2>Superb features</h2>

                    <div className="featuresWrapper">
                        <div className="feature">
                            <div className="featureIcon">
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>

                            <div className="featureText">
                                <h3>Brilliant creative design</h3>

                                <p>Ah, well! It means much the same thing, said the Duchess, digging her  sharp little chin into Alice's shoulder as she added, and the moral  of that is m-dash.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="featureIcon">
                                <i className="fa fa-trophy" aria-hidden="true"></i>
                            </div>

                            <div className="featureText">
                                <h3>On mouse over title</h3>

                                <p>Then they both bowed low, and their curls got entangled together. Alice laughed so much at this, that she had to run back into the wood for fear of their hearing her.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="featureIcon">
                                <i className="fa fa-magic" aria-hidden="true"></i>
                            </div>

                            <div className="featureText">
                                <h3>Incredible documentation</h3>

                                <p>Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman, 'and that for two reasons.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="featureIcon">
                                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                            </div>

                            <div className="featureText">
                                <h3>Responsive & retina ready</h3>

                                <p>Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman, 'and that for two reasons. First, because I'm on the same side.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
	    );
    }
}

export default SuperbFeatureSection;