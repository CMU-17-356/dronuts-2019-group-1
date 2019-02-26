import React, { Component, Fragment } from 'react';
import Donuts from "./donuts";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Donuts />
      </Fragment>

    );

  }

}

export default App;
