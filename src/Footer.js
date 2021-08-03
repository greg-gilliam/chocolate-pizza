import React, { Component } from 'react';

import Logo from './logo.png';

class Footer extends Component {
    render() { 
        return ( 
            <>
            <img src={Logo} alt='Logo'/>
            <h3>Delicious &copy; 2013 All Rights Reserved.</h3>
            <h3>Proudly published with Ghost.</h3>
            </>
         );
    }
}
 
export default Footer;