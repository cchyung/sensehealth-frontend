import React from 'react';
import styled from 'styled-components';

function generateRows(people) {
  return people.map(person => (
    <PeopleRow>
      <PeopleRowCell alert={person.temperature > 100 || person.avgHeartRate > 100 || person.oxygen <= 92}><Name>{person.name}</Name></PeopleRowCell>
      <PeopleRowCell>{person.role}</PeopleRowCell>
      <PeopleRowCell alert={person.temperature > 100}><Number>{person.temperature}</Number> degrees</PeopleRowCell>
      <PeopleRowCell alert={person.avgHeartRate > 100}><Number>{person.avgHeartRate}</Number> bpm</PeopleRowCell>
      <PeopleRowCell alert={person.oxygen <= 92}><Number>{person.oxygen}</Number> percent</PeopleRowCell>
    </PeopleRow>
  ))
}

function PeopleTable({ people }) {
    const PeopleRows = generateRows(people)
    return (
        <Table>
          <TableHeaderRow>
            <th width="25%">Name</th>
            <th width="18.75%">Role</th>
            <th width="18.75%">Temperature</th>
            <th width="18.75">Avg. Heart Rate</th>
            <th width="18.75%">Oxygen</th>
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
  }

  &:last-child {
    td {
      border-bottom: 16px solid #EBEFF2;
    }
  }
`;

const PeopleRowCell = styled.td`
  color: #6A707E;
  ${({alert}) => alert && 'color: #FF103B;'}
`;

const Name = styled.span`
  font-weight: 700;
`;

const Number = styled.span`
  font-weight: 700;
`;

export default PeopleTable;