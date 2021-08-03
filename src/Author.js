import React, { Component } from 'react';

import AuthIcon from './van-pic.png';

class Author extends Component {
    render() { 
        return ( 
        <>
            <img src={AuthIcon} alt='Author' />
            <div id="Blurb">
            <h4>Vanessa Stevenson</h4>
            <span>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
            </div>
            <div>
            <button id="share-btn">SHARE RECIPE</button>
            </div>
        </>
         );
    }
}
 
export default Author;