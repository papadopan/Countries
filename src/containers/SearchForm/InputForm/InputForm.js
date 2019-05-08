import React from 'react'
import styled from 'styled-components';

import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux';



const InputWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const StyledInput = styled.input`
    width:100%;
    max-width:90rem;
    padding:1.5rem;
    text-align: center;
    background:transparent;
    border:none;
    outline:none;
    border-bottom: 1px solid var(--color-main);
    color: var(--color-main);
    font-size: 2rem;
    letter-spacing: 2px;

    &::placeholder {
        color: var(--color-main);
    }
`;

const InputForm = ({ field, form:{erros, touched}, ...props, fetchCountry, fetchCountrybyRegion}) => {
  return (
    <InputWrapper>
        <StyledInput {...field} {...props} onChange={ (e)=> e.target.value === ''? fetchCountrybyRegion('Europe'):fetchCountry(e.target.value, 'search')}/>
    </InputWrapper>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  fetchCountry: (name, action)=> actions.fetchCountry(name, action),
  fetchCountrybyRegion: name => actions.fetchCountriesByRegion('Europe')
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
