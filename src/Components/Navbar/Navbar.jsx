import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux';
import homeIcon from '../../assets/image/Budgie.svg';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const history = useHistory();

  const signOut = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={homeIcon} alt="Home icon" />
        </Link>

        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isAuthenticated && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isAuthenticated && (
            <button className="btn" type="button" onClick={signOut}>
              Logout
            </button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
