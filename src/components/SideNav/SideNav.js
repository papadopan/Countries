import React from 'react'
import styled from 'styled-components'

import Countries from '../Countries/Countries'

const SideNavWrapper = styled.div`
    position: fixed;
    top: 8rem;
    left: 0;
    height: calc(100vh - 8rem);
    width: 35rem;
    
    display: flex;
    align-items: flex-start;
    padding: 3rem;
    background: var(--color-secondary);

    @media ${props=> props.theme.mediaQueries.larger}{
      width: 25rem;
    }

    @media ${props=> props.theme.mediaQueries.small}{
      display: none;
    }
`;

const SideNav = () => {
  return (
    <SideNavWrapper>
        <Countries/>
    </SideNavWrapper>
  )
}

export default SideNav
