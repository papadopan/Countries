import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ArrowWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
`;


const Img = styled.img`
    height: 20px;
    width: 20px;
`;



const Arrow = (country) => {
  return (
    <ArrowWrapper>
        <NavLink to={`/country/${country.name}`}>
        <Img src={require("../../../assets/arrow.svg")} />
        </NavLink>
    </ArrowWrapper>
  );
}




export default Arrow;
