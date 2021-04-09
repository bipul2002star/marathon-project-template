import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = async e => {
        e.preventDefault();
        history.push('/')

    }
    const register = e => {
        e.preventDefault();
        history.push('/')

    }

    return (
        <div className='login'>
            <Link style={{ textDecoration: 'none' }} to='/'>

                <div className="display-6 login__logo"> Back To Home </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>Your E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='btn btn-success btn-lg btn-block '>Sign In</button>
                </form>

                <button onClick={register} className='btn btn-warning btn-lg btn-block '>Create your Account</button>
            </div>
        </div>
    )
}

export default Login
