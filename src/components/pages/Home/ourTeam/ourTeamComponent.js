import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TeamShortProf from './teamShortProf'

class OurTeamComponent extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		posts: props.allPosts
	// 	};
	// }
	
	render() {

	    return (
			<section className="ourTeamComponent">
                <h2>Our team</h2>
                
                <div className="profileWrapper">
                    <TeamShortProf
                        name = "Ivan Tsar"
                        link = "/ivan_tsar"
                        position = "Junior React Developer"
                        shortDescription = "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты."
                        id = "profile1"
                    />

                    <TeamShortProf 
                        name = "Olexandr"
                        link = ""
                        position = ""
                        shortDescription = ""
                        id = "profile2"
                    />
                    
                    <TeamShortProf 
                        name = "Lyuda"
                        link = ""
                        position = ""
                        shortDescription = ""
                        id = "profile3"
                    />
                    
                    <TeamShortProf 
                        name = "Angelina"
                        link = ""
                        position = ""
                        shortDescription = ""
                        id = "profile4"
                    />
                </div>
			</section>
	    );
    }
}

export default OurTeamComponent;
