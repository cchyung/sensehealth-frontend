import React from 'react';
import styled from 'styled-components';

function PeopleTable() {
    return (
        <Table>
          <TableHeaderRow>
            <th width="25%">Name</th>
            <th width="18.75%">Role</th>
            <th width="18.75%">Temperature</th>
            <th width="18.75">Avg. Heart Rate</th>
            <th width="18.75%">Oxygen</th>
          </TableHeaderRow>
          
          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>

          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>

          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>

          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>

          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>
          
          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>

          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>

          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>

          <PeopleRow>
            <td><Name>Peter Parker</Name></td>
            <td>Nurse</td>
            <td><Number>98.9</Number> degrees</td>
            <td><Number>90</Number> bpm</td>
            <td><Number>95</Number> percent</td>
          </PeopleRow>
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
    color: #6A707E;
    background: #FFFFFF;
    border-bottom: 3px solid #EBEFF2;
  }

  &:last-child {
    td {
      border-bottom: 16px solid #EBEFF2;
    }
  }
`;

const Name = styled.span`
  font-weight: 700;
`;

const Number = styled.span`
  font-weight: 700;
`;

export default PeopleTable;