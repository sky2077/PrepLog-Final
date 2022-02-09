import {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './register.css';

import MetaData from '../../components/layout/MetaData';

import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';

import {register, clearErrors} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [user,setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:''
  });

  const { name, email, password, confirmPassword} = user;

  const alert = useAlert();  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isAuthenticated, loading, error} = useSelector(state => state.auth);
  console.log(isAuthenticated);

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

      if(password !== confirmPassword){
          alert.error('Please enter same passwords!');
      }
      else{

        // const params = new URLSearchParams();

        // params.append('name', name);
        // params.append('email', email);
        // params.append('password', password);
    //   console.log(  name);


      dispatch(register(user));
      }
  }

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  return <Fragment>
    <MetaData title='Register User'/>

    <div classNameName="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex bg-image"></div>


                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">

                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4 text-center"><i className="bi bi-person-plus me-2"></i>Register</h3>
                                    <p className="text-muted mb-4 text-center">Welcome to PrepLog!</p>
                                    <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                            <input 
                                              name="name" 
                                              type="text" 
                                              placeholder="Name" 
                                              required
                                              autoFocus 
                                              className="form-control rounded-pill border-0 shadow-sm px-4" 
                                              value={name}
                                              onChange={onChange}
                                              />
                                        </div>
                                        <div className="mb-3">
                                            <input 
                                            name="email" 
                                            type="email" 
                                            placeholder="Email address" 
                                            required 
                                            className="form-control rounded-pill border-0 shadow-sm px-4"
                                            value={email}
                                            onChange={onChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input 
                                            name="password" 
                                            type="password" 
                                            placeholder="Password" 
                                            required 
                                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                            value={password}
                                            onChange={onChange} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input 
                                            name="confirmPassword"
                                            type="password" 
                                            placeholder="Confirm password" 
                                            required 
                                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                            value={confirmPassword}
                                            onChange={onChange}
                                            />
                                        </div>
                                        {/* <div className="form-check">
                                            <input id="customCheck1" type="checkbox" checked className="form-check-input" />
                                            <label for="customCheck1" className="form-check-label">Remember password</label>
                                        </div> */}
                                        <div className="d-grid gap-2 mt-2">
                                        <button 
                                          type="submit" 
                                          className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                          disabled={loading? true : false}
                                          >
                                            Sign in</button>
                                        <p className="text-center mb-0">
                                            <Link to="/login" className="link"><span className="text-danger">Login Here</span></Link> | 
                                            <Link to="/password/forgot" className="link text-primary"> Forgot Password?</Link>
                                        </p>
                                        </div>
                                        {/* <div>
                                        <p className="text-muted my-2 text-center">--Or--</p>
                                          <a className="text-center btn btn-danger text-uppercase mb-2 rounded-pill shadow-sm w-100" href="/auth/google" role="button">
                                          <i className="bi bi-google me-2"></i>Sign In with Google
                                          </a>
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
  </Fragment>;
};

export default Register;
