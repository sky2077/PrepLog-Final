import "./questions.css";

import MetaData from "../../components/layout/MetaData";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";

import Loader from "../../components/layout/loader/Loader";
import {useAlert} from 'react-alert';

import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from "lodash";
import { getQuestions, clearErrors } from "../../actions/topicsActions";


import {tickUntickQuestions, loadUser} from '../../actions/userActions';
import { TICK_UNTICK_RESET } from '../../constants/userConstants';
import AllQuestions from "../../components/allQuestions/AllQuestions";
import DoneQuestions from "../../components/doneQuestions/DoneQuestions";
import NotDoneQuestions from "../../components/notDoneQuestions/NotDoneQuestions";

export const Questions = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const [val, setVal] = useState({all: true, done: false, undone: false});

    const {questions, loading, error} = useSelector(state => state.questions);
    const {  isUpdated, error: err, message } = useSelector(state => state.user);

    let { topic } = useParams();
    

    useEffect(()=>{

        if (error) {
          alert.error(error);
            dispatch(clearErrors())
        }
    
        if(!loading && questions.length === 0){
            dispatch(getQuestions());
        }

        if(err) {
          alert.error(err);
          dispatch(clearErrors());
        }

        if (isUpdated) {  
          
          alert.success(message);

            dispatch(loadUser());

            dispatch({
                type: TICK_UNTICK_RESET
            });
        } 
        
      },[dispatch, error,questions.length, isUpdated,alert,message, loading,err]);

    const result = questions.filter(question =>
        _.camelCase(question.Topic) === topic);

      const selected = {
          borderBottom: "2px solid gray",
          borderRadius: "0.4rem"
        }
        
    
  return <>
    <MetaData title={result[0]?.Topic}/>
          <Header/>
          <Fragment>
            {loading? <Loader/>:<Fragment>
              <div className="container">
                <div className="h1 topic text-center">{result[0]?.Topic}</div>
                    <div className="d-flex justify-content-center h5">
                    <div className="m-3 text-primary p-2 questionStatus"
                    style={val.all ? selected : null} 
                    onClick={()=>setVal({all: true, done:false, undone:false})}>
                      <i className="bi bi-list-task me-1"></i>
                      All
                    </div>
                    <div className="m-3 p-2 text-success questionStatus" 
                    style={val.done ? selected : null} 
                    onClick={()=>setVal({all: false, done:true, undone:false})}>
                      <i className="bi bi-check-all me-1"></i>
                      Done
                    </div>
                    <div className="m-3 p-2 text-danger questionStatus"
                    style={val.undone ? selected : null}  
                    onClick={()=>setVal({all: false, done:false, undone:true})}>
                      <i className="bi bi-hourglass-split me-1"></i>                    
                      Not Done
                    </div>
                    </div>
                    <hr className="mb-5"></hr>
                </div>


                <div className="row d-flex align-items-center flex-column">
                  {val.all && <AllQuestions result={result}/>}
                  {val.done && <DoneQuestions result={result}/>}
                  {val.undone && <NotDoneQuestions result={result}/>}
                 </div>
              </Fragment>}
          </Fragment>
          
         
      <Footer/>
  </>;
};
