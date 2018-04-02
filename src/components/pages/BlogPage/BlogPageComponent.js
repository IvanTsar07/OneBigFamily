import React, { Component } from 'react';
import axios from 'axios';
import BlogPost from './blogPost';
import $ from "jquery";

class BlogPage extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            categories: []
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

        axios.get("./category.json")
          .then(response => {
            this.setState({categories: response.data})
          })
          .catch(function (error) {
            console.log(error);
        });

    }

    filterPostHandle = function(e) {
        var cat = e.target.getAttribute('data-category');
        var posts = document.querySelector('.postBlog');

        $('.postBlog').removeClass('notactive');

        $('.postBlog').each(function(){
            var attr = $(this).attr('data-category');
            
            if(attr != cat) {
                $(this).addClass('notactive');
            }
        });
    }

    viewAllHandle = function() {
        $('.postBlog').removeClass('notactive');
    }

    render() {
        return (
            <div className="blogPageComponent">
                <div className="blogBanner">
                    <div className="container">
                        <h1>Blog Page</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="filterBlock">
                        <ul>
                            <li onClick={this.viewAllHandle}>View All</li>
                            
                            {
                                this.state.categories.map( (cat, i) => {
                                    return (
                                        <li key={i} onClick={this.filterPostHandle.bind(this)} data-category={cat.name}>{cat.name}</li>
                                    );
                                })
                            }
                        </ul>
                        
                    </div>

                    <div className="blogPageGrid">
                        {
                            this.state.posts.map(post => {
                                return (    
                                    <BlogPost 
                                        id={post.id} 
                                        name={post.name} 
                                        shortDesription={post.shortDesription} 
                                        link={post.link} 
                                        views={post.views}
                                        image={post.image}
                                        category={post.category}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default BlogPage;