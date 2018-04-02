import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CompanyExperience extends Component {
    
    circleGenerator = function (sel){
        var circles = document.querySelectorAll(sel);
        [].forEach.call(circles,function(el){
            var valEl = parseFloat(el.getAttribute('data-percent'));
            valEl = valEl*659/100;
            el.innerHTML += '<svg><circle transform="rotate(-90)" r="105" cx="-120" cy="120" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 600px;" r="105" cx="-120" cy="120" /></svg>';
        });
    }

    componentDidMount() {
        this.circleGenerator('.circle');
    }



	render() {

	    return (
			<section className="companyExperienceSection">
                <div className="container">
                    <h2>Company expirience</h2>
                    
                    <div className="circleWrapper">
                        <div className="graph">
                            <div className="circle" data-percent="83%">
                                <div className="innerIcon"></div>
                            </div>
                            <p className="number">500</p>
                            <p className="name">years of web development</p>
                        </div>

                        <div className="graph">
                            <div className="circle" data-percent="66%">
                                <div className="innerIcon"></div>
                            </div>
                            <p className="number">25000</p>
                            <p className="name">results of the last <br/> winter year</p>
                            
                        </div>

                        <div className="graph">
                            <div className="circle" data-percent="92%">
                                <div className="innerIcon"></div>
                            </div>
                            <p className="number">100000</p>
                            <p className="name">euros of the military <br/> budget</p>
                        </div>
                    </div>
                </div>
            </section>
	    );
    }
}

export default CompanyExperience;