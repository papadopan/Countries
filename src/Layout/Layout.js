import React, {useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import * as actions from '../store/actions/index'


import NavBar from '../components/NavBar/NavBar';
import SideNav from '../components/SideNav/SideNav'
import Main from '../components/Main/Main';
import SideNavBar from '../components/SideNavBar/SideNavBar';


const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 8rem);
    margin-top:8rem;
`;

const Layout = ({children, fetchCountries}) => {
  useEffect(()=>{
    fetchCountries('Europe')
  })
  return (
    <Wrapper>
      <SideNavBar/>
      <NavBar/>
      {children}
    </Wrapper>

  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    fetchCountries: region => actions.fetchCountriesByRegion(region)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
