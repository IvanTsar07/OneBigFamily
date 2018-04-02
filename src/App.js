import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/Home/homePage';
import Products from './components/pages/products';
import Categories from './components/pages/Categories/categoriesPage'; 
import Gallery from './components/pages/Gallery/GalleryPage';
import ContactPage from './components/pages/Contacts/ContactsPage';
import VideosPage from './components/pages/VideosPage/VideosPage';
import BlogPage from './components/pages/BlogPage/BlogPageComponent';
import AlbumPage from "./components/pages/Gallery/albumPage";

// styles
import './Assets/css/default.min.css';
import './Assets/css/jquery.fancybox.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contacts" component={ContactPage} />
          <Route exact path="/videos" component={VideosPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/gallery/metallica" component={AlbumPage}/>
          <Route exact path="/gallery/offspring" component={AlbumPage}/>
          <Route exact path="/gallery/alter_bridge" component={AlbumPage}/>


          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
