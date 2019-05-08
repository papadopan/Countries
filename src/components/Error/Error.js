import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

const ErrorWrapper = styled.div`
    height:15rem;
    align-items:center;
    justify-content:center;
    padding: 1rem;
    font-size: 2rem;
    color: var(--color-secondary);
    display: ${props=> props.error? 'flex':'none'}
`;

const Error = ({error}) => {
  return (
    <ErrorWrapper error={error}>
      <p>Your search is not correct. Please try again</p>
    </ErrorWrapper>
  )
}


const mapStateToProps = (state) => ({
    error: state.error
  })
  
  const mapDispatchToProps = {
    
  }
  
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Error);
