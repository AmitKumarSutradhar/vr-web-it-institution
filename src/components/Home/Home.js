import React from 'react';
import Topics from '../Topics/Topics';
import './Home.css'
const Home = () => {

    return (
        <div className=''>
            <div className="md:px-20 px-7">
                <div className="header-info ">
                    <div className="header-img w-1/2">
                        <img className='w-full' src="/cover.jpg" alt="" />
                    </div>
                    <div className="cover-info w-1/2 pl-12 text-left">
                        <h2 className='text-3xl font-bold my-4'>VR Web Dev</h2>
                        <h4>A bangladeshi leading Online learning Platform.</h4>
                        <p>Let's start today to learn new thing</p>
                    </div>
                </div>
                <div className="">
                    <Topics></Topics>
                </div>
            </div>
        </div>
    );
};

export default Home;