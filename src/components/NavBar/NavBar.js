import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo/Logo'
import NavItems from '../Navigation/NavItems/NavItems'


const NavBarWrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 3rem;
    background: var(--color-main);
    box-shadow: 10px 1px var(--color-shadow);

    @media ${props=> props.theme.mediaQueries.small}{
      display:none;
  }
`;

const NavBar = () => {
 
  return (
    <NavBarWrapper>
        <Logo/>
        <NavItems/>
    </NavBarWrapper>
  )
}

export default NavBar
