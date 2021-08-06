import React, { Component } from 'react';

import Header from './Header.js';
import Body from './Body.js';
import Author from './Author.js';
import Footer from './Footer.js';
import IngredientPanel from './IngredientPanel.js';
import Image from './Image.js';

class App extends Component {
  render() { 
    return ( 
      <>
      <Header />
      <Image />
      <Body />
      <IngredientPanel />
      <Author />
      <Footer/>
      </>
       );
  }
}
 
export default App;