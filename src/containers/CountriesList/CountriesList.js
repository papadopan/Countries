import React from 'react'
import styled from 'styled-components'  
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

const Ul = styled.ul`
    padding: 1rem;
    margin-top: 2rem;
`;

const Li = styled.li`
    display: flex;
    width: 100%;
    padding: 1.5rem;
`;

const A = styled.a`
    font-size: 1.8rem;
    padding: .5rem;
    letter-spacing: 2px;
    font-family: Melo;
    border-bottom: 1px solid transparent;
    transition:  all .3s;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: var(--color-main);


    &:hover {
        border-bottom: 1px solid var(--color-main)
    }

`;

const CountriesList = ({ fetchCountries }) => {
  return (
    <Ul>
        <Li>
            <A onClick={() => fetchCountries('Africa')}>Africa</A>
        </Li>
        <Li>
            <A onClick={()=> fetchCountries('Americas')}>America</A>
        </Li>
        <Li>
            <A onClick={()=> fetchCountries('Asia')}>Asia</A>
        </Li>
        <Li>
            <A onClick={()=> fetchCountries('Europe')}>Europe</A>
        </Li>
        <Li>
            <A onClick={()=> fetchCountries('Oceania')}>Oceania</A>
        </Li>
    </Ul>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    fetchCountries: region => actions.fetchCountriesByRegion(region)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountriesList);
