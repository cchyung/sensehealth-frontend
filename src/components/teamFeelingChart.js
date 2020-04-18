import React from "react";
import styled from "styled-components";

import { Column } from "./";

import FeelingWellChart from "../assets/graphs/feeling_well_chart.svg";

const TeamFeelingChart = () => (
  <Wrapper justify="space-between" align="center">
    <Options><Fade>Year</Fade> <Fade>3 Months</Fade> <Fade>Month</Fade> <Fade>Week</Fade> <Blue>Today</Blue></Options>
    <GraphImg src={FeelingWellChart} />
  </Wrapper>
);

const Wrapper  = styled(Column)`
  text-align: center;
`;

const Options = styled.span`
  font-weight: 700;
  margin: 12px 0;
  text-transform: uppercase;
`;

const GraphImg = styled.img`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 18px;
  margin-bottom: 18px;
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

export default TeamFeelingChart;