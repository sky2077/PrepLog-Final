import {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './updateProfile.css';

import MetaData from '../../components/layout/MetaData';

import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';

import {updateProfile, loadUser, clearErrors} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';

const UpdateProfile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const alert = useAlert();  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { user } = useSelector(state => state.auth);
    const { error , isUpdated, loading } = useSelector(state => state.user);
  
    useEffect( ()=> {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
        
        if(error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully');
            
            navigate('/profile');

            dispatch(loadUser());


            dispatch({
                type: UPDATE_PROFILE_RESET
            });
        } 
  
  
    }, [dispatch,user, alert, error, isUpdated,navigate])
  
    const submitHandler = (e) => {
        e.preventDefault();
  
        const userData = {name:name}
  
        dispatch(updateProfile(userData));

    }
  






  return <>
            <MetaData title={"Update Profile"}/>
             <Header/>
    <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5 mx-auto updateBox">
                                    <h3 className="display-5 text-center"><i className="bi bi-arrow-repeat"></i> Update</h3>
                                    <p className="text-muted mb-4 text-center">Update your PrepLog Profile!</p>
                                    <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">Name</label>
                                            <input 
                                              name="name" 
                                              type="text" 
                                              placeholder="Name" 
                                              required
                                              autoFocus 
                                              className="form-control rounded-pill border-0 shadow-sm px-4" 
                                              value={name}
                                              id="userName"
                                              onChange={(e)=>setName(e.target.value)}
                                              />
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">Email</label>
                                            <input 
                                            name="email" 
                                            type="email" 
                                            placeholder="Email address" 
                                            required 
                                            className="form-control rounded-pill border-0 shadow-sm px-4"
                                            value={email}
                                            id="userEmail"
                                            onChange={(e)=>setEmail(e.target.value)}                                            
                                            disabled={true}
                                            />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <button 
                                          type="submit" 
                                          className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                          disabled={loading? true : false}
                                          >
                                            Update Profile</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                        <Footer/>
  </>;
};

export default UpdateProfile;
