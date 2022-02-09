import "./card.css"
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import _ from "lodash";
import { useEffect, useState } from "react";

const Card = ({topic}) => {
  const {user} = useSelector(state => state.auth);
  const {questions, loading} = useSelector(state => state.questions);

  let x=0;

  if(!loading){
    questions?.forEach(question => {
      if(user?.questions.includes(question._id) && question.Topic === topic.Topic){
        x++;
      }
    });
  }
 

  return (

      <>
      <div className="col-md-4 col-sm-6 p-4 cardCover">
        <Link className="link" to={`/question/${_.camelCase(topic.Topic)}`}>
        <div className="card topicCard ">
                <div className="card-header topicTitle h3 py-4 px-4">
                {topic.Topic}
                </div>
            <div className="card-body topicBody text-white py-4 px-4">
                <h5 className="card-title mb-2">Total Problems: {topic.Total_No_Of_Questions}</h5>
                <p className="card-text">Problems Solved: {x}</p>
                <p href="#" className="btn btn-dark">Solve Now</p>
            </div>
        </div>
        </Link>
        </div>
      </>
  );
};

export default Card;
