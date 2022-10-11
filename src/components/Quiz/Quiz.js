import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz, handleStartQuiz }) => {
    const { id, logo, name, total } = quiz;
    return (
        <div>
            <div><img src={logo} alt=""></img></div>
            <div className="topic-info">
                <h3>{name}</h3>
                <p>Total Questions: {total}</p>
            </div>
            <button onClick={() => handleStartQuiz(id)} className="btn border border-red-400 p-2"><Link to={`/quiz/${id}`}>Start Quiz</Link></button>
        </div>
    );
};

export default Quiz;