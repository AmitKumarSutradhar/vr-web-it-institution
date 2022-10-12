import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <div className=""><h2 className='text-3xl font-bold my-4'>Sorry.This page is not Available.</h2></div>
            <div className="">
                <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded my-6"><Link to='/'>Please Visit Home</Link></button>
            </div>

        </div>
    );
};

export default Error;