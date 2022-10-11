import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'
const Home = () => {

    // const navigate = useNavigate();
    const quizes = useLoaderData();
    const allQuizes = quizes.data
    // console.log(allQuizes);

    const handleStartQuiz = (id) => {
        // console.log(id);

    }
    return (
        <div className='px-20'>

            <div className="header-info ">
                <div className="header-img w-1/2">
                    <img className='w-full' src="/cover.jpg" alt="" />
                </div>
                <div className="cover-info w-1/2">
                    <h2>VR Web Dev</h2>
                    <h4>A bangladeshi leading Online learning Platform.</h4>
                    <p>Let's start today to learn new thing</p>
                </div>
            </div>
            <div className="quizes grid grid-cols-3 gap-4">
                {
                    allQuizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        handleStartQuiz={handleStartQuiz}
                    ></Quiz>)
                }
            </div>

        </div>
    );
};

export default Home;