import React from 'react';
import Option from '../Options/Option';
import './Question.css'

const Question = ({ question }) => {
    // const allOptions = question.options;
    console.log(question.options);
    const { options } = question;
    return (
        <div className='question my-7 p-7 rounded-lg border border-gray-200 shadow-md'>
            <h2 className='text-3xl font-bold text-left my-5'>Quiz { } {question.question}</h2>
            {
                options.map(option => <Option
                    option={option}
                ></Option>)
            }
        </div>
    );
};

export default Question;