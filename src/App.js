import React, { Component } from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';

import Layout from './Layout/Layout'
import Home from './containers/Home/Home'
import Present from './containers/Present/Present';


class App extends Component {
    render() {
        return ( <
            Layout >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Home } > < /Route> <
            Route exact path = "/countries"
            component = { Home } > < /Route> <
            Route exact path = "/country/:countryName"
            component = { Present } > < /Route>  <
            Redirect to = "/" > < /Redirect> < /
            Switch > <
            /Layout>
        );
    }
}


export default App;