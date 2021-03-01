import React from 'react';
import logo from '../../images/ss.png';
import './Header.css';

const Header = () => {
    return (
        <div className = 'header'>
            <img src={logo} alt="spartan strikers"/>
            <nav>
                <a href="/home">HOME</a>
                <a href="/videos">VIDEOS</a>
                <a href="/news">NEWS</a>
                <a href="/fixtures">FIXTURES</a>
                <a href="/results">RESULTS</a>
                <a href="/players">PLAYERS</a>
                <a href="/gallery">GALLERY</a>
            </nav>
        </div>
    );
};

export default Header;