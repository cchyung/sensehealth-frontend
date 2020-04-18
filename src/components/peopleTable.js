import React from 'react';
import styled from 'styled-components';
import  { useHistory } from 'react-router-dom';

function generateRows(people, handleClick) {
  return people.map(person => {
    const alert = person.temperature > 100 || person.avgHeartRate > 100 || person.oxygen <= 92 || person.checkIn < 4;

    return (
      <PeopleRow onClick={handleClick}>
        <PeopleRowCell alert={alert}>
          <VertIndicator alert={alert} />
          <Big>{person.name}</Big>
        </PeopleRowCell>
        <PeopleRowCell>
          <Big noBold>{person.role}</Big>
        </PeopleRowCell>
        <PeopleRowCell alert={person.temperature > 100}>
          <Big>{person.temperature}</Big> degrees
          <HorzIndicator alert={person.temperature > 100} />
        </PeopleRowCell>
        <PeopleRowCell alert={person.avgHeartRate > 100}>
          <Big>{person.avgHeartRate}</Big> bpm
          <HorzIndicator alert={person.avgHeartRate > 100} />
        </PeopleRowCell>
        <PeopleRowCell alert={person.oxygen <= 92}>
          <Big>{person.oxygen}</Big> percent
          <HorzIndicator alert={person.oxygen <= 92} />
        </PeopleRowCell>
        <PeopleRowCell alert={person.checkIn < 4}>
          <Big>{person.checkIn}</Big> /5
          <HorzIndicator alert={person.checkIn < 4} />
        </PeopleRowCell>
      </PeopleRow>
    );
  });
}

function PeopleTable({ people }) {
    const history = useHistory();

    const PeopleRows = generateRows(people, () => {
      history.push("/profile");
    })
  
    return (
        <Table>
          <TableHeaderRow>
            <th width="20%">Name</th>
            <th width="16%">Role</th>
            <th width="16%">Temp. <Small>Avg.</Small></th>
            <th width="16">Heart Rate <Small>Avg.</Small></th>
            <th width="16%">Oxygen <Small>Avg.</Small></th>
            <th width="16%">Check In <Small>Avg.</Small></th>
          </TableHeaderRow>
          
          {PeopleRows}
        </Table>
    );
}

const Table = styled.table`
  width: 100%;
  box-sizing: border-box;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid #EBEFF2;
  margin-bottom: 32px;
`;

const TableHeaderRow = styled.tr`
  background: rgba(31, 40, 207, 0.8);

  th {
    padding: 16px;
    color: #FFFFFF;
    text-transform: uppercase;
    text-align: left;
  }
`;

const PeopleRow = styled.tr`
  td {
    padding: 16px;
    background: #FFFFFF;
    border-bottom: 3px solid #EBEFF2;
    cursor: pointer;
  }

  &:last-child {
    td {
      border-bottom: 16px solid #EBEFF2;
    }
  }

  &:hover {
    td {
      background-color: #EBEFF2;
    }
  }
`;

const PeopleRowCell = styled.td`
  position: relative;
  color: #6A707E;
  ${({alert}) => alert && 'color: #E56E74;'}
  font-size: 12px;
`;

const Small = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;

const Big = styled.span`
  font-weight: ${({noBold}) => noBold ? `400` : `700`};
  font-size: 16px;
`;

const VertIndicator = styled.div`
  background-color: ${({alert}) => alert ? '#FF103B;' : '#7CE46B;'}
  width: 5px;
  height: 80%;
  display; block;
  position: absolute;
  left: 0;
  top: 10%;
  border-radius: 0 4px 4px 0;
`;

const HorzIndicator = styled.div`
  background-color: #FF103B;
  display: ${({alert}) => alert ? 'block;' : 'none;'}
  width: 15%;
  height: 5px;
  position: absolute;
  left: 16px;
  bottom: 0;
  border-radius: 4px 4px 0 0;
  z-index: 5;
`;

export default PeopleTable;