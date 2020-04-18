import React from 'react';
import styled from 'styled-components';

import { Row, Column } from "./grid";

function Summary({ people }) {
  let outlierCount = 0;

  people.forEach(person => {
    if (person.temperature > 100 || person.avgHeartRate > 100 || person.oxygen <= 92 || person.checkIn < 4) {
      outlierCount++;
    }
  });

  return (
    <Wrapper justify="flex-start" align="center">
      <Column>
        <SummaryLabel>Overview</SummaryLabel>
      </Column>

      <Column width="16%">
        <Row align="center">
          <Stat>{people.length}</Stat>
          <StatLabel>Total Members</StatLabel>
        </Row>
      </Column>

      <Column width="16%">
        <Row align="center">
          <Stat alert>{outlierCount}</Stat>
          <StatLabel alert>Outliers</StatLabel>
        </Row>
      </Column>

      <LinkColumn justify="space-between">
        <Links justify="center">
          <Column>
            <Link>What it means to be "at risk"</Link>
          </Column>

          <Column>
            <Link>What to do with outliers</Link>
          </Column>

          <Column>
            <Link>Working with COVID patients</Link>
          </Column>
        </Links>
      </LinkColumn>
    </Wrapper>
  );
}

const Wrapper = styled(Row)`
  margin: 16px 0;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #EBEFF2;
`;

const SummaryLabel = styled.span`
  padding: 24px;
  background: rgba(31, 40, 207, 0.8);
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 48px;
`;

const Stat = styled.span`
  font-weight: 700;
  font-size: 38px;
  margin-right: 8px;
  color: #2F3676;
  ${({alert}) => alert && 'color: #FF103B;'}
`;

const StatLabel = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  color: #2F3676;
  ${({alert}) => alert && 'color: #FF103B;'}
`;

const LinkColumn = styled(Column)`
  flex-grow: 1;
`;

const Links = styled(Row)`
  border-left: 2px solid #EBEFF2;
  padding: 18px 42px;
  box-sizing: border-box;
  text-align: center;
  justify-content: space-between;
`;

const Link = styled.a`
  text-transform: uppercase;
  max-width: 120px;
  font-size: 12px;
  color: #2F3676;
  font-weight: 700;
`;

export default Summary;