import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import axios from 'axios'


const PresentBodyWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 38rem);
    background: var(--color-main);
    padding: 3rem;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Title = styled.p`
    font-size:2.5rem;
    letter-spacing: 3px;
    color: var(--color-secondary);
    margin: 2rem;
`;  

const Input = styled.input`
    margin:0 5px;
    height: 50px;
    min-width:100px;
    max-width: 200px;
    width:100%;
    background: transparent;
    outline:none;
    border:0;
    border-bottom: 1px solid var(--color-secondary);
    text-align:center;
    color:var(--color-secondary);
    font-size: 2.5rem;

    &:placeholder{

    }
`;

const PresentBody = (country) => {

    const [currencyLocal, setCurrencyLocal] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [curLocal, setCurLocal] = useState('');

    
    useEffect( ()=> async() => {
        let cur = country.currencies[0].code;
        setCurLocal(cur);

        const response = await axios.get(`http://data.fixer.io/api/latest?access_key=392f8b76596478e935a4d1fcf0fb2e8f&base=EUR&symbols=${cur}`)
        setCurrencyLocal(response.data.rates[`${cur}`]);
    })
  return (
    <PresentBodyWrapper>
      <Title>I always wanted to travel from Sweden to {country.name}</Title>
      <Title>I have in my pocket<Input type="number" onChange={(e) =>  setConvertedAmount(currencyLocal * e.target.value)}/> EUR</Title>
      <Title>These money are {`${convertedAmount.toFixed(2)}`} in {curLocal} </Title>
    </PresentBodyWrapper>
  )
}

export default PresentBody
