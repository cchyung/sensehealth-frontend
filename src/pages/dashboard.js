import React from 'react';

import { Menu, Main, Container, Search, Card, Row, Column } from '../components';

function Dashboard() {
  return (
    <>
      <Menu />

      <Main>
        <Search type="text" placeholder="Search for groups or members" />

        <Container>
          <Row justify="space-between">
            <Column width="55%">
              <Card title="This is a title">
                <p>This is a generic paragraph.</p>
                <p>This is a generic paragraph.</p>
                <p>This is a generic paragraph.</p>
                <p>This is a generic paragraph.</p>
                <p>This is a generic paragraph.</p>
              </Card>
            </Column>

            <Column width="40%">
              <Card title="This is a title">
                <p>This is a generic paragraph.</p>
                <p>This is a generic paragraph.</p>
              </Card>

              <Card title="This is a title" isOrange>
                <p>This is a generic paragraph.</p>
                <p>This is a generic paragraph.</p>
              </Card>

              <Card title="This is a title">
                <p>This is a generic paragraph.</p>
                <p>This is a generic paragraph.</p>
              </Card>
            </Column>
          </Row>
        </Container>
      </Main>
    </>
  );
}

export default Dashboard;