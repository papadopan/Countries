import React from 'react'
import styled from 'styled-components'



const HeaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    heigth:100%;
`;


const Img = styled.img`
    height:50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 0rem .5rem 1rem var(--color-main);
`;

const P = styled.p`
  font-size:2rem;
  text-align:center;
`;

const Header = (country) => {
  return (
    <HeaderWrapper>
      <Img src={country.flag}/>
      <P>{country.name}</P>
    </HeaderWrapper>
  )
}

export default Header
