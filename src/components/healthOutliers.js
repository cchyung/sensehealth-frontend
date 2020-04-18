import React from "react";
import styled from "styled-components";

import { Row, Column } from "./";

const HealthOutliers = () => (
  <>
    <OutlierList>
      <ListItem>
        <Name>Adithya B.</Name>
        <Group>Third Floor</Group>
      </ListItem>

      <ListItem>
        <Name>Gavin B.</Name>
        <Group>Third Floor</Group>
      </ListItem>

      <ListItem>
        <Name>Peter Parker</Name>
        <Group>Third Floor</Group>
      </ListItem>

      <ListItem>
        <Name>Mary Jane</Name>
        <Group>Third Floor</Group>
      </ListItem>

      <ListItem>
        <Name>Gwen Stacy</Name>
        <Group>Third Floor</Group>
      </ListItem>

      <ListItem>
        <Name>Barry Allen</Name>
        <Group>Urgent Care</Group>
      </ListItem>

      <ListItem>
        <Name>Iris West</Name>
        <Group>Urgent Care</Group>
      </ListItem>
    </OutlierList>

    <See>See all outliers »</See>
  </>
);

const OutlierList = styled.div`
  margin: -16px;
`;

const ListItem = styled(Row)`
  justify-content: space-between;
  padding: 18px 24px;
  border-top: 5px solid #EBEFF2;
  cursor: pointer;

  &:last-child {
    border-bottom: 5px solid #EBEFF2;
  }

  &:hover {
    background: #EBEFF2;
  }
`;

const Name = styled(Column)`
  width: 50%;
  color: #6A707E;
  font-weight: 700;
`;

const Group = styled(Column)`
  color: #FF103B;
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
  margin-top: 28px;
`;

export default HealthOutliers;