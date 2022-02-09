import "./home.css";
import MetaData from "../../components/layout/MetaData";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Card from "../../components/card/Card";
import Loader from "../../components/layout/loader/Loader";
import {useAlert} from 'react-alert';
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux'
import { getQuestions, getTopics , clearErrors} from '../../actions/topicsActions';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const {topics, loading, error} = useSelector(state => state.content);


  useEffect(()=>{

    if (error) {
      alert.error(error);
            dispatch(clearErrors())
    }

    dispatch(getTopics());
    dispatch(getQuestions());
  },[dispatch, alert, error]);


  return <>
          <MetaData title={"Home"}/>
          <Header/>
          <Fragment>
            {loading? <Loader/>:<Fragment>
              <div className="container">
                {/* <Link to="/login">Login</Link> */}
                <div className="row">
                  {topics.map(topic => (
                    <Card key={topic._id} topic={topic}/>
                  ))}
                </div>
          </div>
              </Fragment>}
          </Fragment>
          
         
      <Footer/>
  </>;
};

export default Home;
