import React, { Component } from 'react';

import Header from './Header.js';
import Body from './Body.js';
import Recipe from './Recipe.js';
import Author from './Author.js';
// import Footer from './Footer.js';

class App extends Component {
  render() { 
    return ( 
      <>
      <Header />
      <Body />
      <Recipe />
      <Author />
      {/* <Footer/> */}
      </>
       );
  }
}
 
export default App;