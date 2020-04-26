import React from "react";
import styled from "styled-components";

import { LineChart as ReactLineChart, Line, ResponsiveContainer, YAxis, XAxis } from "recharts";

import { Row, Column } from "./";

const LineChart = ({ data, title }) => (
  <Wrapper>
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height={150}>
      <ReactLineChart data={data}
      >
        <XAxis dataKey="x" hide={true} />
        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
        <Line type="linear" dataKey="data" stroke="#0070FF" strokeWidth={3} dot={false} />
      </ReactLineChart>
    </ResponsiveContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  border-radius: 10px;
  background: #EBEFF2;
  padding: 24px;
  margin: 28px 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0;
    color: #6A707E;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
`;

export default LineChart;