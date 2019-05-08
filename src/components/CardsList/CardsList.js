import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';


import Card from '../../containers/Card/Card'

const CardsListWrapper = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    opacity: ${props=>props.loading || props.error ? '0' : '1'}
`;

const CardsList = ({countries, loading, error}) => {
  return (
    <CardsListWrapper loading={loading} error={error}>
      {
        countries.map( (country,index) => {
          return <Card key={index} {...country} />
        })
      }
    </CardsListWrapper>
  )
}

const mapStateToProps = (state) => ({
  countries: state.countries,
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = {

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsList)
