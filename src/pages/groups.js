import React from 'react';

import { Menu, Main, Container, Card, Search } from '../components';

function Groups() {
  return (
    <>
      <Menu />

      <Main>
        <Search type="text" placeholder="Search for groups or members" />

        <Container>
          <Card title="Groups">
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

export default Groups;