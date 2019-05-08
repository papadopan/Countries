import React from 'react'
import styled from 'styled-components';

import NavItem from '../Navitem/NavItem'

const Nav = styled.nav`
    display:flex;
    align:items: center;
    justify-content:center;
    height: 100%;
`;


const Ul = styled.ul`
    display:flex;
    align-items:center;
`;

const NavItems = () => {
  return (
    <Nav>
        <Ul>
            <NavItem>Countries</NavItem>
            <NavItem>Currencies</NavItem>
        </Ul>
    </Nav>
  )
}

export default NavItems
