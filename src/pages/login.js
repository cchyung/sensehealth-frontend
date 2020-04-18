import React from 'react';
import styled from 'styled-components';
import  { NavLink } from 'react-router-dom';

function Login() {
  return (
    <BG>
      <NavLink to="/dashboard">
        <Mock src="/login.png" />
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

export default Login;