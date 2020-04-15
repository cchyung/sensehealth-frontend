import React from 'react';

import { Menu, Main, Container, Search, Card, Row, Column, TriCol } from '../components';

function Dashboard() {
  return (
    <>
      <Menu />

      <Main>
        <Search type="text" placeholder="Search for groups or members" />

        <Container>
          <Row justify="space-between">
            <Column width="55%">
              <Card title="Data Dashboard">
                <img src="https://datavizproject.com/wp-content/uploads/2015/10/1-Line-Chart.png" alt="Line chart" />
              </Card>
            </Column>

            <Column width="40%">
              <Card title="Checked In Group Members">
                <TriCol
                  data={[
                    {
                      value: 37,
                      label: 'Today'
                    },
                    {
                      value: 47,
                      label: 'Yesterday'
                    },
                    {
                      value: 117,
                      label: 'Last 7 Days'
                    }
                  ]}
                />
              </Card>

              <Card title="Staff Health Risks" isOrange>
                <TriCol
                  data={[
                    {
                      value: 10,
                      label: 'Today'
                    },
                    {
                      value: 4,
                      label: 'Yesterday'
                    },
                    {
                      value: 20,
                      label: 'Last 7 Days'
                    }
                  ]}
                />
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