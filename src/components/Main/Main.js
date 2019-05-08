import React from 'react'
import styled from 'styled-components'

import CardsList from '../CardsList/CardsList';
import SearchForm from '../../containers/SearchForm/SearchForm';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const MainWrapper = styled.div`
    margin-left: 35rem;
    max-width: calc(100vw - 35rem);
    width: 100%;  
    min-height: calc(100vh - 8rem);
    height: 100%;


    @media ${props=> props.theme.mediaQueries.larger}{
      margin-left: 25rem;
      max-width: calc(100vw - 25rem);
    }


    @media ${props=> props.theme.mediaQueries.small}{
      margin-left: 0;
      max-width: calc(100vw);
    }
`;

const Main = () => {
  return (
    <MainWrapper>
      <SearchForm/>
      <Loader/>
      <Error/>
      <CardsList/>
    </MainWrapper>
  )
}

export default Main;