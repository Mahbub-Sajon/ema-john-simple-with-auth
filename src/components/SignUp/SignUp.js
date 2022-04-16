import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your Password did not match")
            return;
        }
        if(password.length<6){
            setError('password must be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email,password);



    };

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser} action="">
                    <h1 className='form-title'>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                       
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;