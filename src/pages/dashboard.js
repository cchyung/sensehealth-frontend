import React from 'react';

import { Menu } from '../components';

import '../App.css';

function Dashboard() {
  return (
    <>
      <Menu />

      <div className='App'>
        <div className='page'>
          <h1>Dashboard Page</h1>
          <p>This is supposed to be the dashboard page</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;