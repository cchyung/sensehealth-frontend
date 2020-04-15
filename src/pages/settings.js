import React from 'react';

import { Menu } from '../components';

import '../App.css';

function Settings() {
  return (
    <>
      <Menu />

      <div className='App'>
        <div className='page'>
          <h1>Settings Page</h1>
          <p>This is supposed to be the settings page</p>
        </div>
      </div>
    </>
  );
}

export default Settings;