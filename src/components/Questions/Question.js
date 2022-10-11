import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Option from '../Options/Option';
import './Question.css'
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({ question }) => {
    // const allOptions = question.options;
    const { options } = question;
    console.log(question);
    return (
        <div className='question my-7 p-7 rounded-lg border border-gray-200 shadow-md'>
            <div className="flex justify-between items-center">
                <h2 className='text-3xl font-bold text-left my-5'>Quiz { } {question.question}</h2>
                <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
            </div>
            {
                options.map((option, index) => <Option
                    key={index}
                    option={option}
                    question={question}
                    index={index}
                ></Option>)
            }
        </div>
    );
};

export default Question;