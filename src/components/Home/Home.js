import React from 'react';
import Topics from '../Topics/Topics';
import './Home.css'
const Home = () => {

    return (
        <div className=''>
            <div className="md:px-20 px-7">
                <div className="header-info md:px-20 px-7 md:flex-row sm:flex items-center my-20">
                    <div className="header-img md:w-1/2 sm:w-full rounded">
                        <img className='w-full rounded-xl' src="/cover.jpg" alt="" />
                    </div>
                    <div className="cover-info md:w-1/2 sm:w-full pl-12 md:text-left sm:text-center">
                        <h2 className='text-3xl font-bold my-4'>VR Web Dev</h2>
                        <hr />
                        <h4 className='text-3xl my-2'>A bangladeshi leading Online learning Platform.</h4>
                        <p>Bangladesh is a developing country but the IT sector of Bangladesh is a “thrust sector” as it represents the potential for industry growth and this sector also has effective effects on other sectors. There is rapid growth in the IT sector of Bangladesh, VR Web Dev IT institutes that are providing world-class training on various topics.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-3xl font-bold my-4'>All Topics</h2>
                    <Topics></Topics>
                </div>
            </div>
        </div>
    );
};

export default Home;