import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Questions/Question';

const QuizDetail = () => {
    const quiz = useLoaderData();
    const quizDetail = quiz.data;
    const questions = quizDetail.questions;
    // console.log(questions);
    return (
        <div className='px-20'>
            <h2 className='text-6xl my-4'>Quiz of {quizDetail.name}</h2>
            {
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetail;