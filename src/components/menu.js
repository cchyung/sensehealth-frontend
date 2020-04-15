import React from 'react';
import styled from 'styled-components';
import  { NavLink } from 'react-router-dom';

import SquareLogoSVG from '../assets/square_logo.svg';
import TextLogoSVG from '../assets/text_logo.svg';

function Menu() {
  return (
    <Sidebar>
        <SquareLogo src={SquareLogoSVG} alt='Harbor Health Logo'/>
        <Nav>
            <NavItem><NavLink to='/dashboard'>Dashboard</NavLink></NavItem>
            <NavItem><NavLink to='/groups'>Groups</NavLink></NavItem>
            <NavItem><NavLink to='/profile'>Profile</NavLink></NavItem>
            <NavItem><NavLink to='/settings'>Settings</NavLink></NavItem>
        </Nav>
        <BottomLogo src={TextLogoSVG} alt='Harbor Health' />
    </Sidebar>
  );
}

const Sidebar = styled.div`
    width: 256px;
    background-color: white;
    position: fixed;
    height: 100%;
    box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
`;

const SquareLogo = styled.img`
    margin: 0 auto;
    width: 84px;
    height: 84px;
    display: block;
    margin-top: 60px;
`;

const BottomLogo = styled.img`
  position: absolute;
  margin: 0 auto;
  bottom: 28px;
  display: block;
  width: 130px;
  left: 50%;
  margin-left: -65px;
`;

const Nav = styled.ul`
    list-style: none;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 58px;
    font-size: 20px;
    padding-left: 36px;
`;

const NavItem = styled.li`
    margin-bottom: 17px;
    transition: 0.2s color ease;

    a {
        color: #ACAFC8;
        text-decoration: none;

        &:hover {
            color: #1F28CF;
        }
    }
`;

export default Menu;