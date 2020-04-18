import React from 'react';
import styled from 'styled-components';

function Card({ title, isPink, children }) {
  return (
    <Wrapper>
      <Title isPink={isPink}>{title}</Title>

      <Body>
        {children}
      </Body>
    </Wrapper>
  );
}

const Wrapper  = styled.div`
  border-radius: 12px 12px 16px 16px;
  border: 3px solid #EBEFF2;
  border-bottom-width: 16px;
  overflow: hidden;
  margin-bottom: 24px;
`;

const Title = styled.div`
  background: ${({isPink}) => isPink ? '#E56E74' : 'rgba(31, 40, 207, 0.8)'};
  color: #FFFFFF;
  padding: 16px 0;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;

const Body = styled.div`
  background: #FFFFFF;
  padding: 16px;
  border-bottom: 10px solid #EBEFF2;
`;

export default Card;