import {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import Loader from '../../components/layout/loader/Loader';
import MetaData from '../../components/layout/MetaData';

import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';

import {login, clearErrors} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');


  const alert = useAlert();  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isAuthenticated, loading, error} = useSelector(state => state.auth);

  useEffect( ()=> {
      if (isAuthenticated) {
          navigate('/');
      }
      
      if(error) {
        alert.error(error);
        dispatch(clearErrors());
      }


  }, [dispatch, alert, isAuthenticated, error,navigate])

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email,password));
  }



  // for google on click
  // const google = ()=> {
  //   window.open("http://localhost:4000/api/v1/google", "_self");
  // }


  return <Fragment>
    {loading ? <Loader/> : (
      <Fragment>
        <MetaData title= {'Login'}/>
        <div className="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex bg-image"></div>


                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">

                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4 text-center"><i className="bi bi-box-arrow-in-right me-2"></i>Login</h3>
                                    <p className="text-muted mb-4 text-center">Welcome back to PrepLog!</p>
                                    <form onSubmit={submitHandler}>
                                        <div className="mb-3">
                                            <input 
                                              id="inputEmail" 
                                              type="email" 
                                              placeholder="Email address" 
                                              required 
                                              autoFocus 
                                              className="form-control rounded-pill border-0 shadow-sm px-4" 
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input 
                                              id="inputPassword" 
                                              type="password" 
                                              placeholder="Password" 
                                              required
                                              className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                              value={password}
                                              onChange={(e) => setPassword(e.target.value)}
                                              />
                                        </div>
                                        {/* <div className="form-check">
                                            <input id="customCheck1" type="checkbox" checked className="form-check-input" />
                                            <label htmlFor="customCheck1" className="form-check-label">Remember password</label>
                                        </div> */}
                                        <div className="d-grid gap-2 mt-2">
                                        <button type="submit" className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                        <p className="text-center mb-0">
                                            <Link to="/register" className="link"><span className="text-danger">Register Here</span></Link> | 
                                            <Link to="/password/forgot" className="link text-primary"> Forgot Password?</Link>
                                        </p>
                                        </div>
                                        {/* <div>
                                        <p className="text-muted my-2 text-center">--Or--</p>
                                          <span className="text-center btn btn-danger text-uppercase mb-2 rounded-pill shadow-sm w-100" role="button" >
                                          <i className="bi bi-google me-2" ></i>Sign In with Google
                                          </span>
                                        </div> */}
                                    </form>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
      </Fragment>
    )}
  </Fragment>;
};

export default Login;
