import {Fragment, useState, useEffect} from 'react';
import './updatePassword.css';

import MetaData from '../../components/layout/MetaData';

import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';

import {updatePassword, clearErrors} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';

const UpdatePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const alert = useAlert();  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { error , isUpdated, loading } = useSelector(state => state.user);
  
    useEffect( ()=> {
        
        if(error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Password updated successfully');
            
            navigate('/profile');


            dispatch({
                type: UPDATE_PASSWORD_RESET
            });
        } 
  
  
    }, [dispatch, alert, error, isUpdated,navigate])
  
    const submitHandler = (e) => {
        e.preventDefault();
  
        const userData = {
            oldPassword: oldPassword,
            password: password
        }
  
        dispatch(updatePassword(userData));

    }
  






  return <>
            <MetaData title={"Change Password"}/>
             <Header/>
    <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5 mx-auto updateBox">
                                    <h3 className="display-5 text-center"><i className="bi bi-arrow-repeat"></i> Update Password</h3>
                                    <p className="text-muted mb-4 text-center">Update your PrepLog Password!</p>
                                    <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                    <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                            <input 
                                              name="oldPassword" 
                                              type="password" 
                                              placeholder="Old Password" 
                                              required
                                              autoFocus 
                                              className="form-control rounded-pill border-0 shadow-sm px-4" 
                                              value={oldPassword}
                                              id="oldPassword"
                                              onChange={(e)=>setOldPassword(e.target.value)}
                                              />
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="password" className="form-label">New Password</label>
                                            <input 
                                            name="password" 
                                            type="password" 
                                            placeholder="New Password" 
                                            required 
                                            className="form-control rounded-pill border-0 shadow-sm px-4"
                                            value={password}
                                            id="password"
                                            onChange={(e)=>setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <button 
                                          type="submit" 
                                          className="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                          disabled={loading? true : false}
                                          >
                                            Update Password</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                        <Footer/>
  </>;
};

export default UpdatePassword;
