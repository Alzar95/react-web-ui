import React from 'react';
import './Header.css';
import logo from '../resource/images/logo_w.png';

const Header = () => ({
    render() {
        return(
            <header className="header-pixelplex">
                <a href="https://pixelplex.io/" target="_blank" rel="noopener noreferrer">
                    <img className="link-logo-pixelplex" src={logo} align="left" alt="Logo"/>
                </a>
            </header>
        )
    }
});

export default Header;