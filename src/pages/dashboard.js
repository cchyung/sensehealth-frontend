import React from 'react';

import { Menu, Main, Container, Search, Card } from '../components';

function Dashboard() {
  return (
    <>
      <Menu />

      <Main>
        <Search type="text" placeholder="Search for groups or members" />

        <Container>
          <Card title="This is a title">
            <p>This is a generic paragraph.</p>
            <p>This is a generic paragraph.</p>
            <p>This is a generic paragraph.</p>
            <p>This is a generic paragraph.</p>
            <p>This is a generic paragraph.</p>
          </Card>
        </Container>
      </Main>
    </>
  );
}

export default Dashboard;