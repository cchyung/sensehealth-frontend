import React from 'react';
import styled from 'styled-components';

import { Menu, Main, Container, Row, Column, Search, PeopleTable, Summary } from '../components';

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

          <Summary people={mockData} />

          <PeopleTable people={mockData} />
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

export default Groups;