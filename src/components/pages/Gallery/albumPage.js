import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';



class AlbumPage extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            album: [],
            titleImage: '',
            nameAlbum: ''
        }
    }

    componentDidMount() {
        var path = this.props.match.path;
        var link = path.substring(9);
        var data, albumState;
        var ttlImg = '';
        var nameAlb = '';

        axios.get("../gallery.json")
            .then(response => {
                data = response.data;

                data.map(item => {
                    if(item.url == path) {
                        albumState = item.images;
                        ttlImg = item.titleImage;
                        nameAlb = item.name;
                    }
                })
                
                this.setState({
                    album: albumState,
                    titleImage: ttlImg,
                    nameAlbum: nameAlb
                })
            })
        .catch(function (error) {
            console.log(error);
        });
      }

    render() {

        const backImg = {backgroundImage: "url(" + this.state.titleImage + ")"};
        
        return (
            <div className="albumPage">
                <div className="titleImage" style={backImg}>
                    <div className="container">
                        <p className="albumName">{this.state.nameAlbum}</p>
                    </div>
                </div>
                
                <div className="photoWrapper">
                    <div className="container">
                        {
                            this.state.album.map((photo, i) => {
                                return (
                                    <ReactFancyBox key={i} image={photo}/>
                                );
                                
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default AlbumPage;