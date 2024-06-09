import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import "./style/Register.css";
const Register = () => {

    const { register } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState();


    const navigate = useNavigate()

   
        const handleRegister = async (e) => {
            e.preventDefault();
                if (!firstName || !lastName || !email || !password || !confirmPassword) {
                setError('All fields are required.');
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
            try {
                await register(firstName, lastName, email, password);
                navigate('/login');
            } catch (error) {
                setError(error.message);
            }
        };

    return (
        <div className="form-container">
        <form className='form' onSubmit={handleRegister}>
            {error && <p className="error">{error}</p>}
            
            <div className='form-group'>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{width:"300px"}} />
            </div>
            <div className='form-group'>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{width:"300px"}} />
            </div>
            <div className='form-group'>
                <label>Email:</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"300px"}} />
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"300px"}} />
            </div>
            <div className='form-group'>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{width:"300px"}} />
            </div>
            <button type="submit">Register</button>
            <div className="form-link">
                <p>Already have an account? <br /> <a className='register-a' href="/login">Login</a></p>
            </div>
        </form>
    </div>
    );
};

export default Register;