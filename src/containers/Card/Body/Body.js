import React from 'react'
import styled from 'styled-components'

import Info from '../Info/Info';

const BodyWrapper = styled.div`
    display:flex;
    justify-content: space-between;
`;

const Body = (country) => {
  return (
    <BodyWrapper>
      <Info title={country.capital} img="capital.svg"/>
      <Info title={country.currencies[0].code} img="coins.svg"/>
      <Info title={country.population} img="popularity.svg"/>
    </BodyWrapper>
  )
}

export default Body;
