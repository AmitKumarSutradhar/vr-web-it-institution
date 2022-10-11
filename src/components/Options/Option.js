import React from 'react';
import './Option.css';

const Option = ({ option, index, question }) => {
    console.log(question.id);
    return (
        <div className='text-left my-2 flex content-center'>
            <label htmlFor=''>
                <input type="radio" id={index} name={question.id} value={option} />
                {option}
            </label>
        </div>
    );
};

export default Option;