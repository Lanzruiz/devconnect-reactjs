import React, { Fragment } from 'react'
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout}) => {
  const clickLogout = () => {
     logout();
     return <Navigate to="/login" />
  }
  
  const authLinks = (
    <ul>
         <li><Link to="/dashboard">Developers</Link></li> {/*  link to profile */}
         <li><a onClick={clickLogout} href="#!">Logout</a></li>
    </ul>    
    
  );

  const guestLinks = (
      <ul>
         <li><Link to="/">Developers</Link></li> {/*  link to profile */}
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
      </ul> 
  );
  return (
      <nav className="navbar bg-dark">
          <h1>
              <Link to="/"><i className="fas fa-code"></i> DevConnect</Link>
          </h1>
          { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>) }
      </nav>
  )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
