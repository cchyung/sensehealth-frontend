import React from 'react';
import  { NavLink } from 'react-router-dom';

import '../App.css';
import './menu.css';

function Menu() {
  return (
    <div className="sidebar">
        <img className='logo'/>
        <ul className='nav'>
            <li><NavLink to='/' activeClassName='nav-active'>Dashboard</NavLink></li>
            <li>Groups</li>
            <li>Profile</li>
            <li>Settings</li>
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