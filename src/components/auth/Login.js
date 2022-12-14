import React, {useState} from 'react'
import { Link, Navigate} from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from "prop-types";
import { login } from '../../actions/auth'
import Alert from '../layout/Alert'

const Login = ({ login, isAuthenticated}) => {
    const [formData, setformData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setformData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect if logged in

    if(isAuthenticated) {
       return <Navigate to="/dashboard" />
    }


    return (
        <section className="container">
            <Alert />
            {/* <div className="alert alert-danger">
               Invalid credentials
            </div> */}
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
           <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" value={password} onChange={e => onChange(e)} name="password"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </section>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { login })(Login)