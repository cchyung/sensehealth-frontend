import React from 'react';
import styled from 'styled-components';
import  { NavLink } from 'react-router-dom';

function Home() {
  return (
    <BG>
      <NavLink to="/login">
        <Mock src="/landing_page.png" />
      </NavLink>
    </BG>
  );
}

const BG = styled.div`
  background: #F7F8FB;
  text-align: center;
`;

const Mock = styled.img`
  text-align: center;
`;

export default Home;