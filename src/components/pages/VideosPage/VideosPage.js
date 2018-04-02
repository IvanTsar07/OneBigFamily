import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";
const fs = require('fs');
// COMPONENTS 


class VideosPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    this.handleLikeVideo = this.handleLikeVideo.bind(this);
  }

  componentDidMount() {
    axios.get("./videos.json")
      .then(response => {
        this.setState({videos: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });


      console.log(this.props.match.path);
  }

  handleLikeVideo = function(e) {
    var likedVideoId = e.target.parentNode.parentNode.parentNode.id;
    var index = 0;
    var stt = this.state.videos;

    if (!e.target.classList.contains('liked')) {
      for (var i = 0; i < stt.length; i++) {
        if (stt[i].id == likedVideoId) {
          index = i;
          stt[index].likes += 1;
        }
      }
      e.target.classList.add('liked');
    } else {
      for (var i = 0; i < stt.length; i++) {
        if (stt[i].id == likedVideoId) {
          index = i;
          stt[index].likes -= 1;
        }
      }
      e.target.classList.remove('liked');
    }
    
    this.setState({videos: stt});

    // POST

    // axios.put("./videos.json", stt )
    //   .then(res => res.data).catch(function (error) {
    //     if (error.response) {
    //       // The request was made and the server responded with a status code
    //       // that falls out of the range of 2xx
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //       // http.ClientRequest in node.js
    //       console.log(error.request);
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       console.log('Error', error.message);
    //     }
    //     console.log(error.config);
    //   });
  }

  componentWillUnmount() {
    // fs.writeFile('./videos.json', this.state.videos, function(error) {
    //   if (error) {
    //     console.error("write error:  " + error.message);
    //   } else {
    //     console.log("Successful Write to " + './videos.json');
    //   }
    // });
  }
  
  render() {

    return (
      <div className="content">
          <div className="videosPage">
            <div className="videosBanner">
              <div className="container">
                <h1 className="pageName">Videos from concerts and clips</h1>
              </div>
            </div>

            <div className="container">
              <div className="videosGrid" ref="videosGrid">
                {
                  this.state.videos.map((video, key) => {
                    return (
                      <div className="videoBlock" key={key} id={video.id}>
                        <iframe src={video.srcLink}></iframe>

                        <div className="songInfo"> 
                          <p className="songName">{video.name}</p>
                          <p className="songShortDescription">{video.shortDescription}</p>
                        </div>

                        <div className="addInfo">
                          <p className="dateRealese"><i className="fa fa-clock-o" aria-hidden="true"></i> <span>{video.dateRealese}</span></p>
                          <p className="likes" onClick={this.handleLikeVideo} ><i className="fa fa-heart" aria-hidden="true"></i> <span>{video.likes} Likes</span></p>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default VideosPage;
