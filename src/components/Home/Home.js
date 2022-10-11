import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="header-info px-20">
                <div className="header-img w-1/2">
                    <img className='w-full' src="/cover.jpg" alt="" />
                </div>
                <div className="cover-info w-1/2">
                    <h2>VR Web Dev</h2>
                    <h4>A bangladeshi leading Online learning Platform.</h4>
                    <p>Let's start today to learn new thing</p>
                </div>
            </div>
        </div>
    );
};

export default Home;