import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {
    const [formData, setformData] = useState({
        email: '',
        password: ''
    });

    const onChange = e => setformData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const loginUser = {
            email,
            password
        }

        try {
            const baseUrl = 'http://localhost:5000'
            
            // const res = await axios('/api/users', newUser, config);
            axios.post(`${baseUrl}/api/auth`, loginUser)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
                      
        } catch (err) {
            console.log(err)
        }
     }

     const { email, password } = formData;

    return (
        <section className="container">
            <div className="alert alert-danger">
               Invalid credentials
            </div>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
           <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" value={password} onChange={e => onChange(e)} name="password"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <a href="register.html">Sign Up</a>
            </p>
        </section>
    )
}


export default Login