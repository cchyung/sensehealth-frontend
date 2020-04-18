import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Menu, Main, Container, Row, Column, Search, PeopleTable, Summary } from '../components';

import useApi from "../hooks/useApi";

function Groups() {
  const mockData = [
    {
      name: 'Peter Parker',
      role: 'Doctor',
      temperature: 101.2,
      avgHeartRate: 112,
      oxygen: 94,
      checkIn: 2.6,
    },
    {
      name: 'Gwen Stacy',
      role: 'ICU Nurse',
      temperature: 102.6,
      avgHeartRate: 90,
      oxygen: 92,
      checkIn: 1.9,
    },
    {
      name: 'Mary Jane',
      role: 'Head RN',
      temperature: 98.6,
      avgHeartRate: 115,
      oxygen: 95,
      checkIn: 3.4,
    },
    {
      name: 'Harry Osborn',
      role: 'Pre-Op Nurse',
      temperature: 98.9,
      avgHeartRate: 90,
      oxygen: 99,
      checkIn: 4.1
    },
    {
      name: 'Miles Morales',
      role: 'Pre-Op Nurse',
      temperature: 98.9,
      avgHeartRate: 90,
      oxygen: 97,
      checkIn: 4.4
    },
  ];

  const [data, setData] = useState([]);

  const [groupData, loading] = useApi("/get_group_overview", "POST", {
    "group_id": "-M5AzMUXQMdGMTwOnvdP"
  });

  useEffect(() => {
    if (groupData) {
      const userOverviews = groupData.user_overviews;
      const newUsers =  [];

      const userIds = Object.keys(userOverviews)

      userIds.forEach(userId => {
        const user = userOverviews[userId];

        newUsers.push({
          name: userId === 'adib' ? "Adithya B." : "Gavin B.",
          role: "Nurse",
          temperature: user.ecg_sensor.av_temp.toFixed(1),
          avgHeartRate: user.ecg_sensor.av_HR.toFixed(1),
          oxygen: user.ecg_sensor.av_ox.toFixed(1),
          checkIn: 4
        })
      });

      setData([
        ...newUsers,
        ...mockData
      ])
    }
  }, [groupData])

  return (
    <>
      <Menu />

      <Main>
        <Search type="text" placeholder="Search for groups or members" />

        <Container>
          <InfoBar justify="space-between" align="center">
            <Column width="25%"><span>Group: <Blue>Third Floor - Nurse Unit</Blue></span></Column>
            <Column><span>Range: <Fade>Yr</Fade> <Fade>3 Mo</Fade> <Fade>Mo</Fade> <Fade>Wk</Fade> <Blue>Today</Blue></span></Column>
            <Column><span>Sort By: <Blue>Risk Level</Blue></span></Column>
            <Column><Button>+ Add Member</Button></Column>
          </InfoBar>

          {
            loading ? (
              <Loading>Loading...</Loading>
            ) : (
              <>
                <Summary people={data} />
                <PeopleTable people={data} />
              </>
            )
          }
          
        </Container>
      </Main>
    </>
  );
}

const InfoBar = styled(Row)`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 16px;
  color: #6A707E;
`;

const Blue = styled.span`
  display: inline;
  color: #1F28CF;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Fade = styled.span`
  display: inline;
  color: #B6BAEE;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = styled.button`
  background: #1F28CF;
  border-radius: 10px;
  border: none;
  padding: 8px 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
`;

const Loading = styled.h2`
  color: #B6BAEE;
  text-align: center;
  font-size: 32px;
  margin-top: 64px;
  font-size: 48px;
`;

export default Groups;