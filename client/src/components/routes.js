import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Main from './main';
import Cart from './cart';
import Error from './error';
import ReactMap from './reactmap';

class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/cart" component={Cart} />
        <Route path="/location" component={ReactMap} />
        <Route component={Error} />
      </Switch>


    );

  }

}

export default Routes;
