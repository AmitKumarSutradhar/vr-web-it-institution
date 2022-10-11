import React from 'react';

const Quiz = ({ quiz }) => {
    const { logo, name, total } = quiz;
    return (
        <div>
            <div><img src={logo} alt=""></img></div>
            <div className="topic-info">
                <h3>{name}</h3>
                <p>Total Questions: {total}</p>
            </div>
            <button className="btn border border-red-400 p-2">Start Quiz</button>
        </div>
    );
};

export default Quiz;