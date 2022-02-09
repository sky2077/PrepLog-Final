import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

import { loadUser } from './actions/userActions';
import store from './store';

import ProtectedRoute from './components/route/ProtectedRoute'
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import { Questions } from "./pages/questions/Questions";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import NewPassword from "./pages/newPassword/NewPassword";


{/* <Route path='/' element={user? <Home/> : <Navigate  to="/register"/>} /> */}


function App() {

  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>      
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      <Route path='/me/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute>} />
      <Route path='/password/update' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute>} />email
      <Route path='/password/forgot' element={<ForgotPassword/>}/>
      <Route path='/password/reset/:token' element={<NewPassword/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/question/:topic' element={<ProtectedRoute><Questions/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
