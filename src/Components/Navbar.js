import { useNavigate } from 'react-router-dom';
import { setIsAuthorized } from '../Slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Navbar.css';

export function Navbar(){
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function handleonClick_signin(){
    navigator('/signin');
  }
  function handleonClick_signup(){
    navigator('/signup');
  }
  function handleonClick_signout(){
    dispatch(setIsAuthorized(false));
    navigator('/signin');
  }
  function handleonClick_dashboard(){
    navigator('/');
  }
  return (
    <div className="container">
      {!auth.isAuthorized && (
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <span className="fs-4 text-primary">Welcome</span>
            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2" onClick={handleonClick_signin}>Sign In</button>
              <button type="button" className="btn btn-outline-primary" onClick={handleonClick_signup}>Sign Up</button>
            </div>
          </header>
        )
      }
      {auth.isAuthorized && (
          <header className="d-flex py-3 mb-4 border-bottom">
            <ul className="nav nav-pills me-auto">
              <li className="nav-item me-auto"><a href="#" className="nav-link active" aria-current="page" onClick={handleonClick_dashboard}>Dashboard</a></li>
            </ul>
            <ul className="nav nav-pills">
              <li className="nav-item"><a href="#" className="nav-link active" onClick={handleonClick_signout}>Sign Out</a></li>
            </ul>
          </header>
        )
      }
    </div>
  )
}