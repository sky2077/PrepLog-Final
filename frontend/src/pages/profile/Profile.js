import "./profile.css";
import MetaData from "../../components/layout/MetaData";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Loader from "../../components/layout/loader/Loader";
import {useAlert} from 'react-alert';
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux'
import { getTopics } from '../../actions/topicsActions';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const {user, loading} = useSelector(state => state.auth);


  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return <>
          <MetaData title={"Your Profile"}/>
          <Header/>
          <Fragment>
            {loading? <Loader/>:<Fragment>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-3 col-sm-6 col-8">
                        <figure className="figure ">
                            <img src="/images/profile.png" className="figure-img img-fluid rounded" alt="user"/>
                            <figcaption className="figure-caption text-m">Your Profile and Progress</figcaption>
                        </figure>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <Link to="/me/update" id="edit_profile" className=" btn btn-danger btn-block my-3">
                                    Edit Profile
                            </Link>
                        </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-center justify-content-center flex-column">
                            <div className="w-100">
                                <h5>Full Name</h5>                                
                                <p>{user?.name}</p>
                            </div>

                            <div className="w-100">
                                <h5>Email Address</h5>
                                <p>{user?.email}</p>
                            </div>

                            <div className="w-100">
                                <h5>Joined On</h5>
                                <p>{String(user?.createdAt).substring(0, 10)}</p>
                            </div>

                            <div className="w-100">
                                <h5>Total Questions Solved</h5>
                                <p>{user?.questions.length}</p>
                            </div>

                            <div className="w-100">
                                <Link to="/password/update" className="btn btn-dark btn-block">
                                    Change Password
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
              </Fragment>}
          </Fragment>
          
         
      <Footer/>
  </>;
};

export default Home;
