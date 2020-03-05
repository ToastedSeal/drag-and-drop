import React from 'react';
import './Header.css'

import { AppBar, Toolbar } from '@material-ui/core';

const Header = (props) => {
    return <AppBar position="static">
                <Toolbar>
                    <img src={require('../assets/bt-logo.png')} className="bt-logo" alt=""/>
                </Toolbar>
            </AppBar>
} 

export default Header;