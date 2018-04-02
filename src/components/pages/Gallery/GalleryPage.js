import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import $ from "jquery";

// COMPONENTS 
import AlbumPage from "./albumPage";


class GalleryPage extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }
  
  componentDidMount() {
    axios.get("./gallery.json")
      .then(response => {
        this.setState({albums: response.data})
      })
      .catch(function (error) {
        console.log(error);
    });
  }
  
  render() {
    return (
		<div className="content">
      <div className="galleryPage">
        <div className="galleryBanner">
          <div className="container">
            <h1 className="pageName">Gallery</h1>
          </div>
        </div>

        <div className="albumsWrapper">
          <div className="container">
            {this.state.albums.map(album => {
              return (
                <div className="albumBlock" key={album.id}>
                  <Link to={album.url}>
                    <img src={album.titleImage} />
                    
                    <div className="albumInfo">
                      <p className="albumName">{album.name}</p>
                      <p className="photosCount">{album.countImages + " photos"}</p>
                    </div>

                    <p className="albumCategory">{album.category}</p>
                  </Link>
                </div>
              );
            })}  
          </div>
        </div>
      </div>  
		</div>
    );
  }
}

export default GalleryPage;