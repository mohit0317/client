import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {

    const [active, setActive] = useState('signin');

    return (
        <div className='signin-page'>
            <div className="">
                <h1>{active === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
                {active === 'signup' &&
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                    />
                }
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
                <button type='button' className='btn btn-dark'>{active === 'signin' ? 'SIGN IN' : 'SIGN UP'}</button>
                <button type='button' className='btn btn-danger'>CONTINUE WITH GOOGLE </button>
                {active === 'signin'
                    ?
                    <p>Dont have an account? <span onClick={() => setActive('signup')} > Sign up</span></p>
                    :
                    <p>Have an account? <span onClick={() => setActive('signin')} > Sign in</span></p>}
            </div>
        </div>
    )
}

export default SignIn
