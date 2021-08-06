import React, { Component } from 'react';

import ChocoPizza from './choco-pizza.png';

class Image extends Component {
    render() { 
        return ( 
            <img src={ChocoPizza} alt='Chocolate Pizza' /> 
         );
    }
}
 
export default Image;