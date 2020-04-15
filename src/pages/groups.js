import React from 'react';

import { Menu, Main, Container, Card } from '../components';

function Groups() {
  return (
    <>
      <Menu />

      <Main>
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