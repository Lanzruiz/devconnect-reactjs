import React, {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import { setAlert } from '../../actions/alert'
import Alert from '../layout/Alert'
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {

    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const onChange = e => setformData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
       e.preventDefault();
       if(password !== password2) {
            setAlert('Password do not match!', 'danger', '2000');
       } else {
          //   console.log(formData)
            const newUser = {
                name,
                email,
                password
            }

            try {

                const baseUrl = 'http://localhost:5000'
            
                
                // const res = await axios('/api/users', newUser, config);
                axios.post(`${baseUrl}/api/users`, newUser)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                          
            } catch (err) {
                console.log(err)
            }
       }
    }

    const { name, email, password, password2 } = formData;
  
    return (
        <section className="container">
            <Alert />
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Create Your Account
            </p>
            
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name" value={name} onChange={e => onChange(e)} name="name" required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}  required />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email</small
                    >
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password" minLength="6" value={password} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={e => onChange(e)} minLength="6"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section>
  )
}

Register.propTypes = {
   setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register);
