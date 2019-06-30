import React from 'react'
import { Form,Field,Formik,ErrorMessage } from 'formik'
import * as Yup from 'yup';
import styled from 'styled-components';

import InputForm from './InputForm/InputForm'

const SearchWrapper = styled.div`
    height: 10rem;
    width: 100%;
    background: var(--color-secondary);
`;

const StyledForm = styled(Form)`
  height:100%;
`;


const SearchForm = () => {
  return (
    <SearchWrapper>
      <Formik>
        <StyledForm>
          <Field type='email' name='email' placeholder='Search country' component={InputForm}/>
        </StyledForm>
      </Formik>
    </SearchWrapper>
  )
}

export default SearchForm;
