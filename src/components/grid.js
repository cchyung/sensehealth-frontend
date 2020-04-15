import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify}) => justify ? justify : 'auto'};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${({width}) => width ? width : 'auto'};
`;

export {
  Row,
  Column
}