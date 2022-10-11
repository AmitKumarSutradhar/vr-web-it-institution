import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header bg-slate-400 text-slate-50 mb-10">
            <div className="nav-container py-10">
                <div className="logo">
                    <h2><span>VR</span> Web Dev</h2>
                </div>
                <nav className='nav-item'>
                    <Link to='/'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;