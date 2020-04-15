import React from 'react';

import { Menu, Main} from '../components';

function Dashboard() {
  return (
    <>
      <Menu />

      <Main>
        <h1>Dashboard Page</h1>
        <p>This is supposed to be the dashboard page</p>
      </Main>
    </>
  );
}

export default Dashboard;