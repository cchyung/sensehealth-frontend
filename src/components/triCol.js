import React from 'react';
import styled from 'styled-components';

import { Row, Column } from "./grid";

function TriCol({ data, isPink }) {
  return (
    <Row justify="space-between">
      <DataColumn width="33%" isPink={isPink}>
        <Data>{data[0].value}</Data>
        <DataLabel>{data[0].label}</DataLabel>
      </DataColumn>

      <DataColumn width="33%" isPink={isPink}>
        <Data>{data[1].value}</Data>
        <DataLabel>{data[1].label}</DataLabel>
      </DataColumn>

      <DataColumn width="33%" isPink={isPink}>
        <Data>{data[2].value}</Data>
        <DataLabel>{data[2].label}</DataLabel>
      </DataColumn>
    </Row>
  );
}

const DataColumn = styled(Column)`
  text-align: center;
  padding: 8px 0;
  color: ${({isPink}) => isPink ? '#E56E74' : '#2F3676'};
`;

const Data = styled.p`
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 8px;
  padding: 0;
`;

const DataLabel = styled.h3`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 14px;
`;

export default TriCol;