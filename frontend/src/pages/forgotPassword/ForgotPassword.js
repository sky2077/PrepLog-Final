import {Fragment, useState, useEffect} from 'react';
import './forgotPassword.css';

import MetaData from '../../components/layout/MetaData';

import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';

import {forgotPassword, clearErrors} from '../../actions/userActions';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const alert = useAlert();  
    const dispatch = useDispatch();
  
    const { error , message , loading } = useSelector(state => state.forgotPassword);
  
    useEffect( ()=> {
        
        if(error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        if (message) {
            alert.success(message);

        }   
  
    }, [dispatch, alert, error, message])
  
    const submitHandler = (e) => {
        e.preventDefault();
  
        const userData = {
            email: email
        }

        dispatch(forgotPassword(userData))
    }



  return <>
            <MetaData title={"Forgot Password"}/>
             <Header/>
    <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5 mx-auto updateBox">
                                    <h3 className="display-5 text-center"><i className="bi bi-arrow-repeat"></i> Forgot Password</h3>
                                    <p className="text-muted mb-4 text-center">Enter your Preplog Email!</p>
                                    <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                            <input 
                                              name="email" 
                                              type="email" 
                                              placeholder="Email" 
                                              required
                                              autoFocus 
                                              className="form-control rounded-pill border-0 shadow-sm px-4" 
                                              value={email}
                                              id="email"
                                              onChange={(e)=>setEmail(e.target.value)}
                                              />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <button 
                                          type="submit" 
                                          className="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                          disabled={loading? true : false}
                                          >
                                            Send Email</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                        <Footer/>
  </>;
};

export default ForgotPassword;
