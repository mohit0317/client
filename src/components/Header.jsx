import React from 'react';
import logo from '../assets/bank-svgrepo-com.svg';
import './header.css';
import user from '../assets/user-avatar-svgrepo-com.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-main">
                <img src={logo} width={70} alt="Logo" />
                <div className="input ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                    />
                </div>
                <div className='header-buttons'>
                    <button type="button" className="btn btn-light mx-4">Home</button>
                    <button type="button" className="btn btn-light mx-4 ">About</button>
                    <img height={30} src={user} width={50} alt="User Avatar" />
                </div>
            </div>
        </div>
    )
}

export default Header;
