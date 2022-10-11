import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetail = () => {
    const quiz = useLoaderData();
    const quizDetail = quiz.data
    console.log(quizDetail);
    return (
        <div>
            <h2>Quiz of {quizDetail.name}</h2>
        </div>
    );
};

export default QuizDetail;