import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import logo from './logo2.jpg';

function Navbar(){
    return(
            <div>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <NavLink className='navbar-brand' to='/'>
                        <img src={logo} alt='logo' />
                    </NavLink>
                    <div className='container-fluid'>
                        <NavLink className='navbar-brand' to='/'>ViMS</NavLink>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/register'>Signup</NavLink>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    );
};

export default Navbar;