import React, {useEffect} from 'react'
import styled from 'styled-components'
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux'

import PresentHeader from './PresentHeader/PresentHeader'
import PresentBody from './PresentBody/PresentBody'

const PresentWrapper = styled.div`
  min-height: calc(100vh - 8rem);
  width:100%;
`;


const API_KEY = '392f8b76596478e935a4d1fcf0fb2e8f';


const Present = ({fetchCountryInfo, match, country}) =>{


  useEffect( () => {
    fetchCountryInfo(match.params.countryName);
    return () => {
      return ;
    }
  })

return(
  <PresentWrapper>
    <PresentHeader {...country}/>
    <PresentBody {...country}/>
  </PresentWrapper>
  );
}


const mapStateToProps = (state) => ({
  country: state.country
})

const mapDispatchToProps = {
  fetchCountryInfo: name  =>  actions.fetchCountry(name)
}


export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(Present);
