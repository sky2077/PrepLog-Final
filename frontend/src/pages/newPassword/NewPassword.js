import {Fragment, useState, useEffect} from 'react';
import './newPassword.css';

import MetaData from '../../components/layout/MetaData';

import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';

import {resetPassword, clearErrors} from '../../actions/userActions';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';


import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const alert = useAlert();  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useParams().token;

  
    const { error , success } = useSelector(state => state.forgotPassword);
  
    useEffect( ()=> {
        
        if(error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        if (success) {
            alert.success("Password updated successfully");
            navigate('/login');
        }   
  
    }, [dispatch, alert, error, success, navigate])
  
    const submitHandler = (e) => {
        e.preventDefault();
  
        const userData = {
            password: password,
            confirmPassword: confirmPassword
        }


        // token here is the password reset token
        dispatch(resetPassword(token,userData))
    }



  return <>
            <MetaData title={"New Password Reset"}/>
             <Header/>
    <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5 mx-auto updateBox">
                                    <h3 className="display-5 text-center"><i className="bi bi-arrow-repeat"></i> New Password</h3>
                                    <p className="text-muted mb-4 text-center">Set your new PrepLog password!</p>
                                    <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                            <input 
                                              name="password" 
                                              type="password" 
                                              placeholder="Password" 
                                              required
                                              autoFocus 
                                              className="form-control rounded-pill border-0 shadow-sm px-4" 
                                              value={password}
                                              id="password"
                                              onChange={(e)=>setPassword(e.target.value)}
                                              />
                                        </div>

                                        <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                            <input 
                                              name="confirmPassword" 
                                              type="password" 
                                              placeholder="Confirm Password" 
                                              required
                                              autoFocus 
                                              className="form-control rounded-pill border-0 shadow-sm px-4" 
                                              value={confirmPassword}
                                              id="confirmPassword"
                                              onChange={(e)=>setConfirmPassword(e.target.value)}
                                              />
                                        </div>

                                        <div className="d-grid gap-2 mt-2">
                                        <button 
                                          type="submit" 
                                          className="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                          >
                                            Set Password</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                        <Footer/>
  </>;
};

export default NewPassword;
