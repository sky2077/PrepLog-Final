import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./question.css";

import {tickUntickQuestions, loadUser, clearErrors} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useAlert } from "react-alert";

const Question = ({question}) => {

    const [style,setStyle] = useState('unDone');
    const dispatch = useDispatch();
    const alert = useAlert();

    const {user, loading} = useSelector(state => state.auth);

    useEffect(()=>{
        if(!loading && user.questions.includes(question._id)){
            setStyle("done");
        }
        else {
            setStyle("unDone");
        }

    },[dispatch, alert, loading, question._id, user.questions]);


    const clickHandler = () => {
  
        const questionData = {questionId: question._id}
  
        dispatch(tickUntickQuestions(user._id,questionData));
    }

  return <>
  <div className='col-md-10 mx-auto p-2 '>
        <div className={"question bg-gradient p-3 text-white "+style}>
            <span className="tickHere fs-5 me-3 pe-3" onClick={clickHandler}>
            <i className="bi bi-check-lg"></i>
            </span>
            <a className="questionLink" href={question?.URL}><span>{question?.Problem}</span></a>      
        </div>
    </div>
  </>;
};

export default Question;
