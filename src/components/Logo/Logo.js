import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LogoWrapper = styled.div`
    color: var(--color-secondary);
    font-size: 3rem;
    letter-spacing: 2px;
    font-family: Melo;
    height: 100%;
    display:flex;
    align-items:center;
    font-weight: 500;
`;

const Img = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  color: var(--color-secondary)
`;

const LinkWrapper = styled(Link)`
  text-decoration:none;
  color: var(--color-secondary);
`;
const Logo = () => {
  return (
    <LogoWrapper>
      <LinkWrapper to="/">
        <Img src={require('../../assets/map.svg')}/>
        Traveler
        </LinkWrapper>
    </LogoWrapper>
  )
}

export default Logo;
