import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

import store from '. / store / index ';

ReactDOM.render( <
    Provider store = { store } >
    <
    BrowserRouter >
    <
    ThemeProvider theme = { theme } >
    <
    React.Fragment >
    <
    App / >
    <
    GlobalStyles / >
    <
    /React.Fragment>{" "} < /
    ThemeProvider > { " " } <
    /BrowserRouter>{" "} < /
    Provider > ,
    document.getElementById("root")
);