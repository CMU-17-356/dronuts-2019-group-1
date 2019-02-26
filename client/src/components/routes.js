import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Main from './main';
import Cart from './cart';
import Error from './error';

class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>


    );

  }

}

export default Routes;
