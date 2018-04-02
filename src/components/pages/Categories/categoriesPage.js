import React, { Component } from 'react';
import axios from 'axios';

// COMPONENTS 


class Categories extends Component {
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

            {    
              this.state.posts.map(function(post, key){
                return (
                  <div key={key}>
                    <p>Name is {post.name}</p>
                    <p>id: {post.id}</p>
                  </div>
                );
              })
            }
	  	</div>
    );
  }
}

export default Categories;