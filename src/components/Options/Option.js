import React from 'react';
import './Option.css';

const Option = ({ option }) => {

    return (
        <div className='text-left my-2 flex content-center'>
            <input type="radio" id="html" name="fav_language" value={option} className='mr-3' />
            <label for={option}>{option}</label>
        </div>
    );
};

export default Option;