import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from './main';
import Menu from './menu';
import Error from './error';
import ReactMap from './reactmap';
import Checkout from './checkout/Checkout'

class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/menu" component={Menu} />
        <Route path="/cart" component={Checkout} />
        <Route path="/location" component={ReactMap} />
        <Route component={Error} />
      </Switch>


    );

  }

}

export default Routes;
