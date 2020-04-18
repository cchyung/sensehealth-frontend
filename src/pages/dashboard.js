import React from 'react';

import { Menu, Main, Container, Search, Card, Row, Column, TriCol, TeamFeelingChart, HealthOutliers, YourGroups } from '../components';

function Dashboard() {
  return (
    <>
      <Menu />

      <Main>
        <Search type="text" placeholder="Search for groups or members" />

        <Container>
          <Row justify="space-between">
            <Column width="60%">
              <Card title="Your Groups">
                <YourGroups />
              </Card>

              <Card title="How Your Team is Feeling">
                <TeamFeelingChart />
              </Card>
            </Column>

            <Column width="38%">
              <Card title="Staff Health Risks" isPink>
                <TriCol
                  data={[
                    {
                      value: 9,
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

                  isPink
                />
              </Card>

              <Card title="Health Outliers" isPink>
                <HealthOutliers />
              </Card>
            </Column>
          </Row>
        </Container>
      </Main>
    </>
  );
}

export default Dashboard;