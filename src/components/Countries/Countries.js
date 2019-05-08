import React from 'react'
import styled from 'styled-components'

import CountriesList from '../../containers/CountriesList/CountriesList';

const CountriesWrapper = styled.div`
    height: 100%;
`;

const Header = styled.p`
    font-size: 3rem;
    font-weight: 600;
    color: ${props=> props.header ? 'var(--color-main)': 'var(--color-white)'};
    font-family: Helvetica;
    letter-spacing: 2px;

    @media ${props=> props.theme.mediaQueries.larger}{
        font-size: 2.7rem;
      }
`;

const Countries = () => {
  return (
    <CountriesWrapper>
        <Header header={true}>
            Countries by
        </Header>
        <Header header={false}>
            region
        </Header>
        <CountriesList/>
    </CountriesWrapper>
  )
}

export default Countries
