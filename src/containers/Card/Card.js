import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import { Link } from 'react-router-dom'

import Header from './Header/Header';
import Body from './Body/Body'
import Arrow from './Arrow/Arrow'


const CardWrapper = styled(Link)`
    height:220px;
    max-width: 310px;
    width:100%;
    margin: 2rem 2rem;
    padding: 2rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    box-shadow: 0rem .5rem 1rem var(--color-secondary);
    color: white;
    background:var(--color-main);
    text-decoration:none;

    &:hover{
      cursor:pointer;
      box-shadow: 0rem .5rem 1.8rem var(--color-secondary);
    }
    
`;

const Card = ({selectCountry, ...country}) => {

  return (
    <CardWrapper to={`/country/${country.name}`} onClick={() => selectCountry(country)}>
      <Header {...country} />
      <Body {...country} />
    </CardWrapper>
  );
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  selectCountry: country => actions.updateSelectedCountry(country)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
