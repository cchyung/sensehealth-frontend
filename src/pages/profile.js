import React from 'react';

import { Menu, Main, Container, Card } from '../components';

function Profile() {
  return (
    <>
      <Menu />

      <Main>
        <Container>
          <Card title="Profile">
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

export default Profile;