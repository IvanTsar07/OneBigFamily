import React, { Component } from 'react';
import axios from 'axios';

// COMPONENTS 
import HomeSlider from './homeSlider';
import LatestsBlogPosts from './latestBlogPosts';
import QuotesSliderSection from './quotesSliderSection';
import OurTeamComponent from './ourTeam/ourTeamComponent';
import CompanyExperience from './companyExperience/companyExp';
import PopularPostsSection from './popularPosts/popularPostsSection';
import TopNewOfMonth from './topNewOfMonth';
import SuperbFeatureSection from './superbFeaturesSection';


class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("./data.json")
      .then(response => {
        this.setState({posts: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  
  
  render() {
    return (
		<div className="content">
			<HomeSlider />

      <TopNewOfMonth />

      <PopularPostsSection />

      <SuperbFeatureSection />

      <QuotesSliderSection />

      <LatestsBlogPosts data={this.state.posts} />

      <CompanyExperience />

      <OurTeamComponent />  
		</div>
    );
  }
}

export default Homepage;