import React, { Component, Fragment } from 'react';
import Nav from './nav';
import Footer from "./footer";
import Donuts from "./donuts";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />

        <Nav />
        <Donuts />
        <Footer />
      </Fragment>

    );

  }

}

export default App;
