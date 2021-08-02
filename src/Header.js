import React, { Component } from 'react';
import DeliciousLogo from './delicious-logo.png';
import FbIcon from './fb-icon.png';
import TwitIcon from './twit-icon.png';
import GoogleIcon from './gp-icon.png';
import InstaIcon from './insta-icon.png';
import FlicIcon from './flic-icon.png';
import PintIcon from './pint-icon.png';
import RssIcon from './rss-icon.png';
import MailIcon from './mail-icon.png';

class Header extends Component {
    render() { 
        return (
        <>
            <div id="delicious">
                <img src={DeliciousLogo} alt='logo' />
            </div> 
            <div id="social">
            <ul>
                <img src={FbIcon} alt='FB' />
                <img src={TwitIcon} alt='Twitter' />
                <img src={GoogleIcon} alt='Google+' />
                <img src={InstaIcon} alt='Instagram' />
                <img src={FlicIcon} alt='Flic' />
                <img src={PintIcon} alt='Pinterest' />
                <img src={RssIcon} alt='RSS' />
                <img src={MailIcon} alt='Email' />
            </ul>
            </div>
        </>

        );
    }
}
 
export default Header;

