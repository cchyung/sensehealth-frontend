import React from 'react';

import { Menu, Main, Container, Card, Column, Row, TriCol, Graph } from '../components';
import HeartRateGraph from '../assets/graphs/heartrate.png';
import RespirationGraph from '../assets/graphs/repsiration.png';
import TemperatureGraph from '../assets/graphs/temperature.png';

let profile_data = {
  name: "Peter Parker"
  
}

function Profile() {
  return (
    <>
      <Menu />

      <Main>
      
        <Container>
          <h1>Health Information for {profile_data.name}</h1>
          <Row justify="space-between">
            <Column width="60%">
              <Card title="Patient Data">
                <Graph src={ TemperatureGraph } alt="Line chart" />
                <Graph src={ HeartRateGraph } alt="Line chart" />
                <Graph src={ RespirationGraph } alt="Line chart" />
              </Card>
            </Column>
            <Column width="35%">
              <Card title="Patient Data">
              <TriCol
                  data={[
                    {
                      value: 24,
                      label: 'Age'
                    },
                    {
                      value: 'Tues.',
                      label: 'Last Seen'
                    },
                    {
                      value: 'Rel.',
                      label: 'Status'
                    }
                  ]}
                />
              </Card>
            </Column>
          </Row>          
        </Container>
      </Main>
    </>
  );
}

export default Profile;