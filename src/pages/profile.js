import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import  { useLocation, useHistory } from 'react-router-dom';

import { Menu, Main, Container, Card, Column, Row, QuadCol, Graph } from '../components';
import Graphs from '../assets/graphs/graphs.png';
import Graphs2 from '../assets/graphs/graphs2.png';
import ProfPic from '../assets/profpic.png';

import useApi from "../hooks/useApi";

let profile_data = {
  name: "Peter Parker"
  
}

function Profile() {
  const { state } = useLocation();
  const history = useHistory();

  if (state === undefined || state.userId === undefined || state.userId === 'mock') {
    history.push("/");
  }

  const [userData, loading] = useApi("/fetch_user_data", "POST", {
    "user_id": state.userId,
    "start_time": -1,
    "sensors": ["ecg_sensor"]
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    if (userData) {
      console.log(userData);

      const ecgSensor = userData.ecg_sensor;
      const keys = Object.keys(ecgSensor);
      const pls = userData.ecg_sensor[keys[0]];

      setData({
        temperature: pls.temp,
        oxygen: pls.pulse_oximeter * 100,
        heartRate: pls.HR
      })
    }
  }, [userData]);

  return (
    <>
      <Menu />

      <Main>
      
        <Container>
          <Row justify="space-between">
            <Column width="50%">
              <IdCard>
                <img src={ProfPic}/>
                <IdContent>
                  <h1>{state.name}</h1>
                  <em>{state.role}</em>
                  <p><b>Birthday:</b> 4/18/90</p>
                  <p><b>Email:</b> {state.userId}@hospital.org</p>
                </IdContent>
              </IdCard>
              <TagList>
                <Tag>Third Floor</Tag>
                <Tag>Symbiote Research</Tag>
              </TagList>
              <Card title="Current Health Signals">
                {!loading && userData && data && <QuadCol
                    data={[
                      {
                        value: data.temperature.toFixed(1),
                        label: 'Temperature'
                      },
                      {
                        value: data.heartRate.toFixed(1),
                        label: 'Heart Rate'
                      },
                      {
                        value: data.oxygen.toFixed(1),
                        label: 'Oxygen'
                      },
                      {
                        value: state.checkIn,
                        label: 'Check In'
                      }
                    ]}
                  />}

                  {
                    loading && <Loading>Loading</Loading>
                  }
              </Card>
              <Card title="Self Assessments">
                <GraphContainer>
                  <img src={Graphs2}></img>
                </GraphContainer>
              </Card>
            </Column>
            <Column width="45%">
              <Card title="Health Dashboard">
                <TabList>
                  <li>Year</li>
                  <li>3 Months</li>
                  <li>Month</li>
                  <li>Week</li>
                  <li className='active'>Today</li>
                </TabList>
                <GraphContainer>
                  <img src={Graphs}></img>
                </GraphContainer>
              </Card>
            </Column>
          </Row>          
        </Container>
      </Main>
    </>
  );
}

const GraphContainer = styled.div`
  img {
    width: 90%;
    display: block;
    margin: 0 auto;
    padding: 20px 0;
  }
`;

const IdCard = styled.div `
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;

  img{
    width: 70px;
    height: 70px;
    margin-left: 30px;
  }
`

const IdContent = styled.div`
  margin-left: 50px;
  h1 {
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    letter-spacing: 0.01em;
  }

  em {
    display: block;
    font-size: 15px;
    line-height: 18px;
    padding-bottom: 30px;
  }

  p {
    display: block;
    margin: 0;
  }
`

const TagList = styled.div`
  margin: 20px 0;
`

const Tag = styled.div`
  display: inline-block;
  background: #FFFFFF;
  border: 3px solid #EBEFF2;
  box-sizing: border-box;
  box-shadow: 0px 3px 0px #EBEFF2;
  border-radius: 10px;
  padding: 15px 30px;
  margin-right: 10px; 
  color: #1F28CF;
  text-transform: uppercase;
  font-weight: bold;
`

const TabList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-left: 0;
  justify-content: space-between;

  li {
    display: inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.01em;
    color: #4850D6;
    text-transform: uppercase;
  }
  
`

const Loading = styled.h2`
  color: #B6BAEE;
  text-align: center;
  font-size: 18px;
`;

export default Profile;