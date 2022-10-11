import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="nav-container">
                <div className="logo">
                    <h2><span>VR</span> Web Dev</h2>
                </div>
                <nav className='nav-item'>
                    <Link to='/'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;