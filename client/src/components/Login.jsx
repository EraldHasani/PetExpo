import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import "./style/Login.css";

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        if (!email || !password) {
            setEmailError('Email is required.');
            setPasswordError('Password is required.');
            return;
        }
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
   
<div className="form-container sign-in-container">
            <form className='login-form' onSubmit={handleLogin}>
                <div className='form-group'>
                    <h1>Login</h1>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <p className="error">{emailError}</p>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {passwordError && <p className="error">{passwordError}</p>}
                    </div>
                    <button type="submit" className='mt-5'>Login</button>
                    <div>
                        <p>Don't have an account? <br /> <a href="/register">Register</a></p>
                    </div>
                </div>
            </form>
</div>
    );
};

export default Login;