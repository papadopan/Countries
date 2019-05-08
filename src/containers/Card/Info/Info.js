import React from 'react'
import styled from 'styled-components'


const InfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const P =styled.p`
    font-size: 1.8rem;
    font-family: Melo;
    margin-top: 10px;
    letter-spacing: 1px;
`;

const Img = styled.img`
    height:25px;
    width: 25px;
`;

const Info = ({title, img}) => {
  return (
    <InfoWrapper>
        <Img src={require(`../../../assets/${img}`)} />
        <P>{title} </P>
    </InfoWrapper>
  )
}

export default Info;
