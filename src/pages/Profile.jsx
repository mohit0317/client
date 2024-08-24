import React from 'react';
import './Profile.css';
import profile from '../assets/user-profile.svg';

const Profile = () => {
    return (
        <div className='profile-main'>
            <div className="page">
                <h2>Profile</h2>
                <img src={profile} alt="" />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                />
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
                <button type='button' className='btn btn-dark'>UPDATE</button>
                <button type='button' className='btn btn-success'>CREATE LISTING</button>
                <div>
                    <button type='button' className='btn'>Delete Account</button>
                    <button type=' button' className='btn'>Sign out</button>
                </div>
            </div>

        </div>
    )
}

export default Profile
