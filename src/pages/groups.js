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
      oxygen: 94
    },
    {
      name: 'Gwen Stacy',
      role: 'ICU Nurse',
      temperature: 102.6,
      avgHeartRate: 90,
      oxygen: 92
    },
    {
      name: 'Mary Jane',
      role: 'Head RN',
      temperature: 98.6,
      avgHeartRate: 115,
      oxygen: 95
    },
    {
      name: 'Harry Osborn',
      role: 'Pre-Op Nurse',
      temperature: 98.9,
      avgHeartRate: 90,
      oxygen: 99
    },
    {
      name: 'Miles Morales',
      role: 'Pre-Op Nurse',
      temperature: 98.9,
      avgHeartRate: 90,
      oxygen: 97
    },
  ];

  return (
    <>
      <Menu />

      <Main>
        <Search type="text" placeholder="Search for groups or members" />

        <Container>
          <InfoBar justify="space-between" align="center">
            <Column width="35%"><span>Group: <Blue>Third Floor - Nurse Unit</Blue></span></Column>
            <Column><span>Filters: <Blue>None</Blue></span></Column>
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
  font-weight: 600;
  margin-bottom: 16px;
  color: #6A707E;
`;

const Blue = styled.span`
  display: inline;
  color: #1F28CF;
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