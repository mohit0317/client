import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='signin-page'>
            <div className="">
                <h1>Sign In</h1>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                />
                <button type='button' className='btn btn-secondary'>SIGN IN</button>
                <button type='button' className='btn btn-danger'>CONTINUE WITH GOOGLE </button>
                <p>Dont have an account? <span> Sign up</span></p>
            </div>
        </div>
    )
}

export default SignIn
