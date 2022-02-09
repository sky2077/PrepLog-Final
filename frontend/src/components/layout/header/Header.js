import "./header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import {Spinner} from 'react-bootstrap'


import { logout } from '../../../actions/userActions';

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth);


  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.')
  }


  return <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className='logo'>
      <div className="navbar-brand m-0 p-0">
        <Link to="/">
          <img src={PF+"logo.gif"}></img>
        </Link>
      </div>
      </div>

      <div className='LeftNavbar ms-auto'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li> */}
        <li className="nav-item fs-4">
          {loading ? <Spinner animation="grow" />
 : user? <Link className="nav-link" to="/profile">  <i className="bi bi-person-circle"> </i>{user?.name}
        </Link> : <Link className="nav-link" to="/login">  <i className="bi bi-box-arrow-in-right me-2"></i>Login
        </Link>}
        </li>
        <li className="nav-item fs-4">
         {user && <Link className="nav-link" to="/" onClick={logoutHandler}>  <i className="bi bi-power"></i>
        </Link>}
        </li>

        
      </ul>
    </div>
  </div>
  </div>
</nav>

    
  </>;
};

export default Header;
