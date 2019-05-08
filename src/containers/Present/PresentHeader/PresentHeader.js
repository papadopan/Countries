import React from 'react'
import styled from 'styled-components'

const PresentHeaderWrapper = styled.div`
    height: 30rem;
    width: 100%;
    background: var(--color-main);
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const Img = styled.img`
    height: 80%;
    border-radius: 10px;
    width:100%;
    max-width: 40rem;
`;


const P =styled.p`
    text-align: center;
    font-size:3.5rem;
    font-family: Melo;
    letter-spacing:2px;
    color: var(--color-secondary);
`;

const PresentHeader = (country) => {
  return (
    <PresentHeaderWrapper>
        <Img src={country.flag}></Img>
        <P>{country.name}</P>
    </PresentHeaderWrapper>
  )
}



export default PresentHeader
