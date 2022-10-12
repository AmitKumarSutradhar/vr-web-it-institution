import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './Option.css';

const Option = ({ option, index, question }) => {
    // console.log(question.id);
    // const notify = () => {
    //     toast("Wow so easy!");
    // }

    return (
        <div className="">
            <div className='text-left my-2 flex content-center'>
                <input type="radio" id={question.id} name={question.id} value={option} />{option}

                {/* <button onClick={() => notify()}>
                    
                </button> */}
            </div>
            {/* <ToastContainer></ToastContainer> */}
        </div>

    );
};

export default Option;