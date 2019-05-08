import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';




const LoaderImg = styled.img`
  display: ${props=> props.loading ? 'block' : 'none'};
  margin: 0 auto;
`;


const Loader = ({loading}) => {

  return (
  <LoaderImg loading={loading} src={require('../../assets/loader.svg')}/> 
  )
}


const mapStateToProps = (state) => ({
  loading: state.loading
})

const mapDispatchToProps = {
  
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
