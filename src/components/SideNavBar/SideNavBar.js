import React, { useState } from 'react'
import styled from 'styled-components'

import Logo from '../Logo/Logo'
import Hamburger from '../Hamburger/Hamburger'
import Countries from '../Countries/Countries'
import NavItems from '../Navigation/NavItems/NavItems';
import { getAllCountries, getCountry, getCountryByRegion } from '../../lib/callApi';



const SideNavBarWrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 8rem;
    z-index:100;
 
    justify-content: space-between;
    align-items:center;
    padding: 0 3rem;
    background: var(--color-main);
    box-shadow: 10px 1px var(--color-shadow);
    display: none;

    @media ${props=> props.theme.mediaQueries.small}{
        display: flex;
    }
`;

const Menu = styled.div`
    position:fixed;
    height: 100vh;
    background:var(--color-secondary);
    padding:5rem;
    width:100%;
    transform: ${props=> props.opened ? 'translateY(0)' : 'translateY(-120%)'};
    transition: all .3s;
    display:flex;
    flex-direction:column;
`;


const SideNavBar = () => {
    const [isOpened, setIsOpened] = useState(false);

  return (
      <React.Fragment>
        <SideNavBarWrapper>
            <Logo/>
            <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened) }/>
        </SideNavBarWrapper>
        <Menu opened={isOpened}>
            <Countries/>
            <NavItems/>
        </Menu>
    </React.Fragment>
  )
}

export default SideNavBar
