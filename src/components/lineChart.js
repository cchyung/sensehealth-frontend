import React from "react";
import styled from "styled-components";

import { LineChart as ReactLineChart, Line, ResponsiveContainer, YAxis, XAxis } from "recharts";

const LineChart = ({ data, title, isAlert }) => (
  <Wrapper>
    <Title>
      <h3>{title}</h3>

      <Current isAlert={isAlert}>{data ? data[data.length-1].data.toFixed(1) : ''}</Current>
    </Title>

    {
      data ? (
        <ResponsiveContainer width="100%" height={75}>
          <ReactLineChart data={data}
          >
            <XAxis dataKey="x" hide={true} />
            <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
            <Line type="linear" dataKey="data" stroke={isAlert ? "#FF103B" : "#0070FF"} strokeWidth={3} dot={false} />
          </ReactLineChart>
        </ResponsiveContainer>
      ) : (
        <Loading>Loading...</Loading>
      )
    }
  </Wrapper>
);

const Wrapper = styled.div`
  border-radius: 10px;
  background: #EBEFF2;
  padding: 24px;
  margin: 28px 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    color: #6A707E;
    font-weight: 300;
    text-transform: uppercase;
  }
`;

const Current = styled.span`
  font-weight: 700;
  color: ${({isAlert}) => isAlert ? "#FF103B" : "#0070FF"};
`;

const Loading = styled.h2`
  color: #B6BAEE;
  text-align: center;
  font-size: 18px;
  line-height: 75px;
  margin: 0;
`;

export default LineChart;