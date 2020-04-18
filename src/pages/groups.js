import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Menu, Main, Container, Row, Column, Search, PeopleTable, Summary } from '../components';

import useApi from "../hooks/useApi";

function Groups() {
  const mockData = [
    {
      name: 'Peter Parker',
      userId: 'mock',
      role: 'Doctor',
      temperature: 101.2,
      avgHeartRate: 112,
      oxygen: 95,
      checkIn: 2.3,
    },
    {
      name: 'Gwen Stacy',
      userId: 'mock',
      role: 'ICU Nurse',
      temperature: 102.6,
      avgHeartRate: 90,
      oxygen: 92,
      checkIn: 1.9,
    },
    {
      name: 'Mary Jane',
      userId: 'mock',
      role: 'Head RN',
      temperature: 98.6,
      avgHeartRate: 115,
      oxygen: 95,
      checkIn: 3.4,
    },
    {
      name: 'Harry Osborn',
      userId: 'mock',
      role: 'Pre-Op Nurse',
      temperature: 98.9,
      avgHeartRate: 90,
      oxygen: 99,
      checkIn: 4.1
    },
    {
      name: 'Miles Morales',
      userId: 'mock',
      role: 'Pre-Op Nurse',
      temperature: 98.9,
      avgHeartRate: 90,
      oxygen: 97,
      checkIn: 4.4
    },
  ];

  const [data, setData] = useState([]);

  const [groupData, loading] = useApi("/get_group_overview ", "POST", {
    "group_id": "-M5BNkHSfgzeFycxm9F1"
  });

  useEffect(() => {
    if (groupData) {
      const userOverviews = groupData.user_overviews;
      const newUsers =  [];

      const userIds = Object.keys(userOverviews)

      userIds.forEach(userId => {
        const user = userOverviews[userId];

        const name = (userId) => {
          if (userId === 'adib') return 'Adithya Bellathur';
          if (userId === 'zsullens') return 'Zach Sullens';
          if (userId === 'jwong') return 'Janeline Wong';
          if (userId === 'gbains') return 'Gavin Bains';
          if (userId === 'cchyung') return 'Conner Chyung';
          if (userId === 'wwillie') return 'Wilhelm Willie';
        }

        const cI = (userId) => {
          if (userId === 'adib') return 4.2;
          if (userId === 'zsullens') return 2.3;
          if (userId === 'jwong') return 4.8;
          if (userId === 'gbains') return 4.2;
          if (userId === 'cchyung') return 4.1;
          if (userId === 'wwillie') return 3.9;
        }

        newUsers.push({
          name: name(userId),
          userId: userId,
          role: "Nurse",
          temperature: user.ecg_sensor.av_temp.toFixed(1),
          avgHeartRate: user.ecg_sensor.av_HR.toFixed(1),
          oxygen: (user.ecg_sensor.av_ox*100).toFixed(1),
          checkIn: cI(userId),
        })
      });

      const combinedData = [
        ...newUsers
      ]

      combinedData.sort((a, b) => {
        const aRisk = a.temperature > 100 || a.avgHeartRate > 100 || a.oxygen <= 92 || a.checkIn < 4;
        const bRisk = b.temperature > 100 || b.avgHeartRate > 100 || b.oxygen <= 92 || b.checkIn < 4;

        if (aRisk === bRisk) {
          return a.checkIn - b.checkIn;
        }

        return bRisk - aRisk;
      })

      setData(combinedData)
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
            <Column><span>Range: <Fade>Yr</Fade> <Fade>3 Mo</Fade> <Fade>Mo</Fade> <Blue>Wk</Blue> <Fade>Today</Fade></span></Column>
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