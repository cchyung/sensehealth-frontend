import React from "react";
import styled from "styled-components";

import  { useHistory } from 'react-router-dom';

const YourGroups = () => {
  const history = useHistory();

  const gotoGroup = () => {
    history.push("/groups");
  }

  return (
    <>
      <GroupGrid>
        <Group onClick={gotoGroup} atRisk>Third Floor <Badge>2</Badge></Group>
        <Group>Executive Mgmt.</Group>
        <Group>Second Floor</Group>
        <Group atRisk>Intensive Care <Badge>2</Badge></Group>
        <Group atRisk>Urgent Care <Badge>4</Badge></Group>
        <Group>First Floor</Group>
      </GroupGrid>

      <See>See all groups »</See>
    </>
  );
}

const GroupGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
`;

const Group = styled.div`
  display: flex;
  border: 3px solid #EBEFF2;
  border-radius: 10px;
  border-bottom-width: 8px;
  text-align: center;
  padding: 32px;
  font-weight: 700;
  color: ${({atRisk}) => atRisk ? '#E56E74' : '#62AC18'};
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #EBEFF2;
  }
`;

const Badge = styled.div`
  background: #F32E60;
  border-radius: 999px;
  position: absolute;
  top: -10px;
  right: -10px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

const See = styled.span`
  display: block;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0.01em;
  color: rgba(47, 54, 118, 0.3);
  text-transform: uppercase;
  margin-top: 24px;
`;

export default YourGroups;