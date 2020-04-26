import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";

import { BarChart, Tooltip, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts";

const CheckInData = ({ title, isAlert, userId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("https://sensehealth-backend.herokuapp.com/fetch_user_evaluation", {
        method: "POST",
        body: JSON.stringify({
          "user_id": "gbains",
          "start_time": 0
        })
      });

      const respData = await resp.json();
      setData(respData)
    }

    getData();
  }, []);

  const chartData = useMemo(() => {
    if (data) {
      const count = {};
      const keys = Object.keys(data);

      keys.slice(keys.length - 10, keys.length - 1).forEach(key => {
        const value = parseInt(data[key]);

        if (value in count) {
          count[value]++;
        } else {
          count[value] = 1
        }
      });

      const countKeys = Object.keys(count).sort();
      const result = [];
      countKeys.forEach(key => {
        const rating = parseInt(key);
        let ratingLabel = "";

        if (rating === 1) {
          ratingLabel = "Sick";
        } else if (rating === 5) {
          ratingLabel = "Well";
        }

        result.push(
          {
            rating: ratingLabel,
            count: count[key]
          }
        )
      });

      console.log(result);

      return result;
    } else {
      return null;
    }
  }, [data]);

  return (
    <Wrapper>
      <Title>
        <h3>{title}</h3>
      </Title>

      {
        chartData ? (
          <ResponsiveContainer width="100%" height={150}>
            <BarChart width={730} height={250} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rating" />
              <YAxis dataKey="count" />
              <Bar dataKey="count" fill="#4850D6" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <Loading>Loading...</Loading>
        )
      }
    </Wrapper>
  );
};

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

export default CheckInData;