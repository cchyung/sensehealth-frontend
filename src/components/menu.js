import React from 'react';
import  { NavLink } from 'react-router-dom';

import '../App.css';

function Menu() {
  return (
    <div className="sidebar">
        <img className='logo' alt='Harbor Health Logo'/>
        <ul className='nav'>
            <li><NavLink to='/dashboard' activeClassName='nav-active'>Dashboard</NavLink></li>
            <li><NavLink to='/groups'>Groups</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/settings'>Settings</NavLink></li>
        </ul>
        <div className='logo-bot'>
            <p className='logo-bot-content'>
                <em>
                    Harbor
                </em><br/>
                Health
            </p>
        </div>
    </div>
  );
}

export default Menu;