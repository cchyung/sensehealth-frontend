import React from 'react';

import { Menu } from '../components';

import '../App.css';

function Profile() {
  return (
    <>
      <Menu />

      <div className='App'>
        <div className='page'>
          <h1>Profile Page</h1>
          <p>This is supposed to be the profile page</p>
        </div>
      </div>
    </>
  );
}

export default Profile;