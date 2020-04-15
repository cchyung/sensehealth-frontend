import React from 'react';

import { Menu, Main, Container, Card } from '../components';

function Settings() {
  return (
    <>
      <Menu />

      <Main>
        <Container>
          <Card title="Settings">
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

export default Settings;